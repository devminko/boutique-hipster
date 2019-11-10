const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check } = require('express-validator');

// Models
const User = require('../models/User');

// CREATE AUTH TOKEN => returns jwt as a string
const createAuthToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });
};

// CREATE USER MODEL => create User Model and insert into db
const createUser = async (name, email, password) => {
  return User.create({
    name,
    email,
    password,
  })
};

// REGISTER VALIDATION CHECKS => validates name, email, password for new users
const registerValidatorChecks = () => {
  return [
    check('name', 'Name is required').not().isEmpty(),
    check('name', 'Name max length of 50 characters').isLength({ max: 50 }),
    check('email', 'Please enter valid email address').isEmail(),
    check('password', 'Please create password with 6 or more characters').isLength({ min: 6 }),
  ]
};

module.exports = { createAuthToken, createUser, registerValidatorChecks }