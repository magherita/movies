const express = require("express");
const router = express.Router();
const User = require("../../models/User");

// @route GET api/users/test
// @desc tests users route
// @access public
router.get("/test", (req, res) => res.json({
    msg: "User test OK!"
}));

// @route POST api/users/register
// @desc register users route
// @access public
router.post("/register", (req, res) => {
    // check if email already registered
    User
        .findOne({
            email: req.body.email
        })
        .then(user => {
            if (user) {
                return res
                    .status(400)
                    .json({
                        email: "Email already exists"
                    });
            }
            const newUser = {
                name: req.body.name,
                email: req.body.email,
                avatar,
                password: req.body.password
            };
        })
});

module.exports = router;