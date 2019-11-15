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
  shipping_street: {
    type: Sequelize.STRING,
  },
  shipping_street2: {
    type: Sequelize.STRING,
  },
  shipping_city: {
    type: Sequelize.STRING,
  },
  shipping_state: {
    type: Sequelize.STRING,
  },
  shipping_zip: {
    type: Sequelize.STRING,
  },
  shipping_country: {
    type: Sequelize.STRING,
  },
  billing_street: {
    type: Sequelize.STRING,
  },
  billing_street2: {
    type: Sequelize.STRING,
  },
  billing_city: {
    type: Sequelize.STRING,
  },
  billing_state: {
    type: Sequelize.STRING,
  },
  billing_zip: {
    type: Sequelize.STRING,
  },
  billing_country: {
    type: Sequelize.STRING,
  },
});

module.exports = User;