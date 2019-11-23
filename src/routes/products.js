const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const { 
  createProduct, productValidatorChecks,
} = require('../utils/products');

// PRODUCT MODEL
const Product = require('../models/Product');

/***************** GET ALL PRODUCTS ****************
  @route                ||      GET => api/products
  @description          ||      Get all products
  @access               ||      Private
*************************************************/
router.get('/', async (req, res) => {
  try {
    let products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).send(err);
    console.error(`Error retrieving products: ${err}`);
  }
});

/***************** CREATE / ADD NEW PRODUCT ****************
  @route                ||      POST => api/products/create
  @description          ||      Create / Add new product
  @access               ||      Private (For Admin)
************************************************************/
router.post('/create', [auth, productValidatorChecks()], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };

  let {
    product_category, product_name, product_color, product_price, product_description, product_info, product_images, product_url, product_quantity, on_sale, sale_discount
  } = req.body;

  try {
    // Insert Product into database
    const product = await createProduct({
      product_category,
      product_name,
      product_color,
      product_price,
      product_description,
      product_info,
      product_images,
      product_url,
      product_quantity,
      on_sale,
      sale_discount,
    });
    
    res.status(201).json({product});
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
    console.error(err.message);
  };
});

/************************** PATCH / EDIT PRODUCT ****************************
  @route                ||      PATCH => api/products/edit/:product_id
  @description          ||      PATCH / EDIT product
  @access               ||      Private (For Admin)
*****************************************************************************/
router.patch('/edit/:id', [auth], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };

  let { product_category, product_name, product_color, product_price, product_description, product_info, product_images, product_url, product_quantity, on_sale, sale_discount } = req.body;

  try {
    // Query DB for req product (id pulled from params :id) 
    let product = await Product.findOne({
      where: { id: req.params.id },
      attributes: ['id'],
    });

    // Update product details and insert into DB
    product = await product.update({
      product_category,
      product_name,
      product_color,
      product_price,
      product_description,
      product_info,
      product_images,
      product_url,
      product_quantity,
      on_sale,
      sale_discount,
    });

    res.status(200).json({ product_category, product_name, product_color, product_price, product_description, product_info, product_images, product_url, product_quantity, on_sale, sale_discount });
  } catch (err) {
    res.status(500).send('Server Error');
  };
});


module.exports = router;