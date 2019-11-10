const Sequelize = require('sequelize');
const database = require('../database/database');

const User = database.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  billing_address: {
    type: Sequelize.STRING,
  },
  shipping_address: {
    type: Sequelize.STRING,
  }
});

module.exports = User;