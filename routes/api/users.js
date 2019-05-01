const express = require("express");
const gravatar = require("gravatar");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();
const User = require("../../models/User");
const keys = require("../../config/keys");

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

// @route POST api/users/login
// @desc login users route
// @access public
router.post("/login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    // search user with email
    User
        .findOne({
            email
        })
        .then(user => {
            if (!user) {
                return res.status(404).json({
                    email: "User not found"
                });
            }
            // compare passwords
            bcryptjs
                .compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // user matched
                        // generate jwt payload
                        const payload = {
                            id: user.id,
                            name: user.name,
                            avatar: user.avatar
                        };

                        // sign token
                        jwt.sign(
                            payload,
                            keys.JWT_KEY, {
                                expiresIn: 3600
                            },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        );
                    } else {
                        return res
                            .status(400)
                            .json({
                                password: "Password incorrect"
                            });
                    }
                })
        })
});

// @route POST api/users/current
// @desc current user route
// @access private
router.get("/current", passport.authenticate("jwt", {
    session: false
}), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

module.exports = router;