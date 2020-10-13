const mongoose = require('mongoose')
const userSchema = require('../Models/userSchema');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const keys = require("../config/keys");

const User = mongoose.model('users', userSchema);

module.exports = {
    addNewUser: function (req, res) {
        const { errors, isValid } = validateRegisterInput(req.body);
        // Check validation
        if (!isValid) {
            console.log(req.body)
            return res.status(400).json("Invalid credentials");
        }
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.status(400).json({message:"Email already exists"});
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role
                });
                // Hash password before saving in database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                const payload = {
                                    id: user.id,
                                    name: user.name
                                };
                                // Sign token
                                jwt.sign(
                                    payload,
                                    keys.secretOrKey,
                                    {
                                        expiresIn: 31556926 // 1 year in seconds
                                    },
                                    (err, token) => {
                                        res.json({
                                            success: true,
                                            token: token,
                                            user: {
                                                id: user.id,
                                                name: user.name,
                                                email: user.email
                                            }
                                        });
                                    }
                                );
                            })
                    });
                });
            }
        });
    },
    login: function (req, res) {
        // Form validation
        const { errors, isValid } = validateLoginInput(req.body);
        // Check validation
        if (!isValid) {
            return res.status(400).json("Invalid credentials");
        }
        const email = req.body.email;
        const password = req.body.password;
        // Find user by email
        User.findOne({ email }).then(user => {
            // Check if user exists
            if (!user) {
                return res.status(404).json( "Email not found" );
            }
            // Check password
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    // User matched
                    // Create JWT Payload
                    const payload = {
                        id: user.id,
                        name: user.name
                    };
                    // Sign token
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn: 31556926 // 1 year in seconds
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    role: user.role,
                                    email: user.email
                                }
                            });
                        }
                    );
                } else {
                    return res
                        .status(400)
                        .json( "Password incorrect" );
                }
            });
        });
    },

    getUsers: function (req, res) {
        const token = req.header('x-auth-token')
        const decoded = jwt.verify(token, keys.secretOrKey);
        req.user = decoded;
        User.findById(req.user.id)
            .select('-password')
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err));
    },

    getAllUsers: function (req, res) {
        User.find({})
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err));
    },
    changeRole: function(req, res) {
		User.findOneAndUpdate({ _id: req.params.UserId },  req.body, {new: true})
			.then(user => res.json(user))
			.catch(err => res.status(422).json(err));
    },
    deleteUser: function (req, res) {
        User.deleteOne({ _id: req.params.UserId })
            .then(User => res.json(User))
            .catch(err => res.status(422).json(err));
    }
}