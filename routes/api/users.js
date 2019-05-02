const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../../models/User");
const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

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
    // validate form input
    const {
        errors,
        isValid
    } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    // check if email already registered
    User
        .findOne({
            email: req.body.email
        })
        .then(user => {
            if (user) {
                errors.email = "Email already exists";
                return res
                    .status(400)
                    .json(errors);
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
                        .then(user => res.status(200).json(user))
                        .catch(err => console.log(err));
                });
            })
        })
});

// @route POST api/users/login
// @desc login users route
// @access public
router.post("/login", (req, res) => {
    // validate form input
    const {
        errors,
        isValid
    } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // search user with email
    User
        .findOne({
            email
        })
        .then(user => {
            if (!user) {
                errors.email = "User not found";
                return res.status(404).json(errors);
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
                                return res
                                    .status(200)
                                    .json({
                                        success: true,
                                        token: "Bearer " + token
                                    });
                            }
                        );
                    } else {
                        errors.password = "Password incorrect";
                        return res
                            .status(400)
                            .json(errors);
                    }
                })
        })
});

// @route GET api/users/current
// @desc current user route
// @access private
router.get("/current", passport.authenticate("jwt", {
    session: false
}), (req, res) => {
    return res
        .status(200)
        .json({
            id: req.user.id,
            name: req.user.name,
            email: req.user.email
        });
});

module.exports = router;