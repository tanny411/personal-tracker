const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const JWT_secret = require('../../config/keys').JWT_secret;
const jwt = require('jsonwebtoken');

// User Model
const User = require('../../models/User');

// @route   POST api/auth
// @desc    Authenticate existing user
// @access  Public
router.post('/', (req, res) => {
    const { email, password } = req.body;

    //Simple validation
    if(!email || !password){
        return res.status(400).json({ msg:'Please enter all fields'});
    }

    //Check for existing user
    User.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({ msg:'User does not exist' });

            //Validate password
            bcrypt.compare(password, user.password)
                .then( isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials'});
                    jwt.sign(
                        { id: user.id },
                        JWT_secret,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name :user.name,
                                    email: user.email
                                }
                            })
                        }
                    )
                })
        });
});

module.exports = router;