const { check } = require('express-validator');

// PRODUCT MODEL
const Product = require('../models/Product');

// CREATE PRODUCT MODEL => create Product Model and insert into db
const createProduct = async ({product_category, product_name, product_color, product_price, product_description, product_info, product_images, product_url, edit_url, product_quantity, on_sale, sale_discount}) => {
  return Product.create({
    product_category,
    product_name,
    product_color,
    product_price,
    product_description,
    product_info,
    product_images,
    product_url,
    edit_url,
    product_quantity,
    on_sale,
    sale_discount,
  });
};

// PRODUCT VALIDATOR CHECKS => validates all fields of Product model
const productValidatorChecks = () => {
  return [
    check('product_category', 'Product category is required').not().isEmpty(),
    check('product_category', 'Max category length is 100 characters').isLength({ max: 100 }),
    check('product_name', 'Product name is required').not().isEmpty(),
    check('product_name', 'Max name length is 100 characters').isLength({ max: 100 }),
    check('product_color', 'Product color is required').not().isEmpty(),
    check('product_color', 'Max color length is 50 characters').isLength({ max: 50 }),
    check('product_price', 'Product price is required (valid integer)').not().isEmpty().isInt(),
    check('product_description', 'Product description is required').not().isEmpty(),
    check('product_description', 'Max product description is 1000 characters').isLength({ max: 1000 }),
    check('product_info', 'Product info is required').not().isEmpty(),
    check('product_info', 'Product info is array').isArray(),
    check('product_images', 'Product images is required').not().isEmpty(),
    check('product_images', 'Product images is array').isArray(),
    check('product_url', 'Product URL is required').not().isEmpty(),
    check('product_url', 'Max product URL is 100 characters').isLength({ max: 100 }),
    check('edit_url', 'Edit URL is required').not().isEmpty(),
    check('edit_url', 'Max edit URL is 100 characters').isLength({ max: 100 }),
    check('product_quantity', 'Product quantity is required (valid integer').isInt(),
    check('on_sale', 'On sale is required (boolean)').isBoolean(),
    check('sale_discount', 'Sale discount is required').not().isEmpty(),
    check('sale_discount', 'Sale discount is array').isArray(),
  ];
};

module.exports = { createProduct, productValidatorChecks }