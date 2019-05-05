const express = require("express");
const router = express.Router();
const passport = require("passport");
const axios = require("axios");
const keys = require("../../config/keys");
const isEmpty = require("../../validation/is-empty");

// @route POST api/movies/search
// @desc all movies route
// @access public
router.post("/search", async (req, res) => {
  await axios
    .get(keys.OMDB_API, {
      params: {
        apikey: keys.OMDB_API_KEY,
        s: req.body.title,
        type: req.body.type,
        y: req.body.year
      }
    })
    .then(result => {
      if (isEmpty(result.data)) {
        return res.status(404).json({
          movies: "No movies were found"
        });
      }
      return res.status(200).json(result.data);
    })
    .catch(error => {
      return res.status(500).json({
        movies: error.response.data
      });
    });
});

// @route POST api/movies/id
// @desc all movies route
// @access public
router.post("/id", async (req, res) => {
  await axios
    .get(keys.OMDB_API, {
      params: {
        apikey: keys.OMDB_API_KEY,
        i: req.body.imdbId,
        type: req.body.type,
        y: req.body.year
      }
    })
    .then(result => {
      if (isEmpty(result.data)) {
        return res.status(404).json({
          movies: "No movies were found"
        });
      }
      return res.status(200).json(result.data);
    })
    .catch(error => {
      return res.status(500).json({
        movies: error.response.data
      });
    });
});

module.exports = router;
