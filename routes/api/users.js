const express = require("express");
const gravatar = require("gravatar");
const bcryptjs = require("bcryptjs");
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
            // get email profile avatar
            const avatar = gravatar.url(req.body.email, {
                s: "200",
                r: "pg",
                d: "mm"
            });

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar,
                password: req.body.password
            });

            // hash password and save user
            bcryptjs.genSalt(10, (err, salt) => {
                bcryptjs.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            })
        })
});

module.exports = router;