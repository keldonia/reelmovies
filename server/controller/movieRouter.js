const express = require("express");
const requestPromise = require("request-promise");
const mime = require("mime");

const MovieDBApis = require("./../constants/moviedbApis.js");
const apiKey = require("./../../apiKey.js");

let router = express.Router();

router.use((req, res, next) => {
  res.setHeader("Content-Type", mime.getType("json"));

  next();
})

router.get("/popular", async(req, res, next) => {
  let requestOptions = {
    qs: {
      api_key: apiKey,
      page: req.query.page || 1,
    },
    url: MovieDBApis.baseUrl +  MovieDBApis.popular
  }

  console.log(requestOptions);

  await requestPromise.get(requestOptions)
    .then(movieDBRes => {
      console.log(movieDBRes);
      res.send(movieDBRes);
    });
});

router.get("/search", async(req, res, next) => {
  let requestOptions = {
    qs: {
      api_key: apiKey,
      query: req.query.search,
      page: req.query.page || 1
    },
    url: MovieDBApis.baseUrl + MovieDBApis.search
  }

  await requestPromise.get(requestOptions)
    .then(movieDBRes => {
      console.log(movieDBRes);
      res.send(movieDBRes);
    });
});

router.get("/genres", async(req, res, next) => {
  let requestOptions = {
    qs: {
      api_key: apiKey
    },
    url: MovieDBApis.baseUrl + MovieDBApis.genres
  }

  await requestPromise.get(requestOptions)
    .then(movieDBRes => {
      console.log(movieDBRes);
      res.send(movieDBRes);
    });
});

router.get("/:id", async(req, res, next) => {
  let requestOptions = {
    qs: {
      api_key: apiKey
    },
    url: MovieDBApis.baseUrl + MovieDBApis.movie + "/" + req.params.id
  }

  await requestPromise.get(requestOptions)
    .then(movieDBRes => {
      res.send(movieDBRes);
    });
});

router.get("/credits/:id", async(req, res, next) => {
  let requestOptions = {
    qs: {
      api_key: apiKey
    },
    url: MovieDBApis.baseUrl + MovieDBApis.movie + "/" + req.params.id + MovieDBApis.credits
  }

  await requestPromise.get(requestOptions)
    .then(movieDBRes => {
      res.send(movieDBRes);
    });
});

module.exports = router;