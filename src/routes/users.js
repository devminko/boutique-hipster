const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const { 
  createAuthToken, createUser, registerValidatorChecks, loginValidatorChecks, 
} = require('../utils/utils');

// USER MODEL
const User = require('../models/User');

/***************** GET ALL USERS ****************
  @route                ||      GET => api/users
  @description          ||      Get all users
  @access               ||      Private
*************************************************/
router.get('/', 
  async (req, res) => {
    try {
      let users = await User.findAll({ attributes: { exclude: ['password']} });
      res.status(200).json(users);
    } catch (err) {
      res.status(400).send(err);
      console.error(`Error retrieving users: ${err}`);
    }
  }
);

/***************** GET CURRENT USER ****************
  @route                ||      GET => api/users/current
  @description          ||      Get current user
  @access               ||      Private
*************************************************/
router.get('/current', auth, async (req, res) => {
  try {
    // query db for req user
    let user = await User.findOne({
      where: { id: req.user.id },
      // attributes: ['id', 'name', 'email', 'password', 'shipping_address', 'billing_address']
      attributes: ['id', 'name', 'email', 'shipping_address', 'billing_address']
    })
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

/***************** CREATE / REGISTER USER ****************
  @route                ||      POST => api/users/register
  @description          ||      Create / Register new user
  @access               ||      Public
*********************************************************/
router.post('/register',
  registerValidatorChecks(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { name, email, password } = req.body;

    try {
      // Check to see if email exists, if yes return error message
      let user = await User.findOne({ where: { email }, attributes: ['id']});
      if (user) {
        return res.status(400).json({
          errors: [{ msg: 'A user has registered that email.' }]
        })
      }

      // Set password
      password = await bcrypt.hash(password, 8);

      // Insert User into database
      user = await createUser(name, email, password);

      // Cache User id as token payload and create Auth token
      const payload = {
        id: user.id,
      };

      const token = createAuthToken(payload);

      res.status(201).json({ token });
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

/***************** LOGIN USER ***************************
  @route                ||      POST => api/users/login
  @description          ||      Login new user
  @access               ||      Public
*********************************************************/
router.post('/login', 
  loginValidatorChecks(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check to see if user email exists
      let user = await User.findOne({
        where: { email },
        attributes: ['id', 'password'],
      });

      if (!user) {
        return res.status(400).json({
          errors: [{ msg: 'Invalid Credentials' }],
        });
      };

      // Compare req password with User password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          errors: [{ msg: 'Invalid Credentials' }],
        });
      };

      // Cache user id as token payload & create Auth token with payload
      const payload = {
        id: user.id,
      };

      const token = createAuthToken(payload);

      res.status(200).json({ token });
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

module.exports = router;