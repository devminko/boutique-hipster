const Sequelize = require('sequelize');
const database = require('../database/database');

const Product = database.define('product', {
  product_category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  product_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  product_color: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  product_price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  product_description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  product_info: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false,
  },
  product_images: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false,
  },
  product_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  product_quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  on_sale: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  sale_discount: {
    type: Sequelize.ARRAY(Sequelize.DECIMAL(5, 2)),
    allowNull: false,
  },
});

module.exports = Product;