const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const JWT_secret = require("../../config/keys").JWT_secret;
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// Load Input Valudation
const validateLoginInput = require("../../validation/login");

// User Model
const User = require("../../models/User");

// @route   POST api/auth
// @desc    Authenticate existing user
// @access  Public
router.post("/", (req, res) => {
  const { email, password } = req.body;

  const { errors, isValid } = validateLoginInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  //Check for existing user
  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = "User does not exist";
      return res.status(400).json(errors);
    }

    //Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        errors.password = "Invalid credentials";
        return res.status(400).json(errors);
      }

      jwt.sign(
        { id: user.id },
        JWT_secret,
        { expiresIn: '1d' },
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

// @route   GET api/auth/user
// @desc   Get user data
// @access  Private
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => {
      // Send the expiration time
      retObj = user.toObject();
      retObj.exp = req.user.exp;
      res.json(retObj);
    });
});

module.exports = router;
