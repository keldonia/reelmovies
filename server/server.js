const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const mime = require("mime");

const app = express();

const movieRouter = require("./controller/movieRouter.js");

let port = process.env.PORT || 800

app.use(bodyParser.json(), (req, res, next) => {
  console.log(req.path);
  console.log(req.query);

  next();
});

app.use("/api", movieRouter);


app.use(express.static(__dirname + "./../client"));

app.get((req, res) => {
  let reqPath = path.normalize(__dirname + "./../client" + req.path);

  if (reqPath.includes(".js") || reqPath.includes(".css")) {
    let contentType = mime.lookup(reqPath);
    
    res.setHeader("Content-Type", contentType);
    res.sendFile(reqPath);
  }
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "./../client/index.html");
});

const httpServer = http.createServer(app);

httpServer.listen(8080, () => {
  console.log("HTTP server is running on port 8080");
});