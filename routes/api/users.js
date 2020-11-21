const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const JWT_secret = require("../../config/keys").JWT_secret;
const jwt = require("jsonwebtoken");

// Load Input Valudation
const validateRegisterInput = require('../../validation/register');

// User Model
const User = require("../../models/User");

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  const { errors, isValid } = validateRegisterInput(req.body);
  
  //Check Validation
  if(!isValid){
    return res.status(400).json(errors);
  }

  //Check for existing user
  User.findOne({ email }).then((user) => {
    if (user) {
      errors.email = "User already exists";
      return res.status(400).json(errors);
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            JWT_secret,
            { expiresIn: 3600 }, //token will last for an hour
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
