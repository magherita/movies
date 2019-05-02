const express = require("express");
const router = express.Router();
const passport = require("passport");
const axios = require('axios');
const keys = require('../../config/keys');
const isEmpty = require('../../validation/is-empty');

// @route GET api/movies/all
// @desc all movies route
// @access private
router.get("/all", passport.authenticate("jwt", {
    session: false
}), async (req, res) => {
    await axios.get(keys.OMDB_API)
        .then(result => {
            if (isEmpty(result.data)) {
                return res
                    .status(404)
                    .json({
                        movies: "No movies were found"
                    });
            }
            console.log(result.data);
            return res
                .status(200)
                .json(result.data);
        })
        .catch(error => {
            return res
                .status(500)
                .json({
                    movies: error
                });
        });
});

module.exports = router;