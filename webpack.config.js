const webpack = require("webpack");
const dotenv = require('dotenv');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

// call dotenv and it will return an Object with a parsed key
const env = dotenv.config({ path: "dev.env"}).parsed;

// create a nice object from the env variable
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  mode: "development",
  context: __dirname,
  entry: ["@babel/polyfill", "./client/app.jsx"],
  output: {
    path: __dirname,
    filename: "./client/bundle.js"
  },
  resolve: {
    extensions: [ ".js", ".jsx", ".css", ".scss" ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: [ "babel-preset-env", "react" ]
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        })
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        options: { mimetype: "image/png" }
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new ExtractTextPlugin({ filename: "./client/style.css", allChunks: true }),
    new webpack.ProvidePlugin({
      "Promise": "bluebird"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return {
            plugins: [
              require("postcss-inline-svg"),
              cssnano({
                zIndex: false,
                safe: true
              }),
              require("autoprefixer")
            ],
            syntax: require("postcss-scss")
          }
        }
      }
    }),
    new ProgressBarPlugin()
  ]
};
