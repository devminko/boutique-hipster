import React, { } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../../../components-ui/button/Button';

import style from './edit-product.module.scss';

// *************************** EDIT PRODUCT (INDIVIDUAL ITEM) COMPONENT *************************** //
const EditProduct = ({ product, history }) => {
  // 'product' passed down as prop from EditProducts.js
  const { id, product_category, product_name, product_color, product_price, product_description, product_info, product_images, product_url, product_quantity, on_sale, sale_discount } = product;

  return (
    <div className={style.editProduct}>
      <p className={style.productField}>{id}</p>    
      <p className={style.productField}>{product_category}</p>    
      <p className={style.productField}>{product_name}</p>    
      <p className={style.productField}>{product_color}</p>    
      <p className={style.productField}>{product_price}</p>    
      <p className={style.productField}>{product_quantity}</p>    
      <p className={style.productField}>{on_sale ? 'true' : 'false'}</p>    
      <Button onClick={() => history.push(`/admin/dashboard/products/edit-product/${id}`)} editProduct>Edit Product</Button>
    </div>
  )
};

export default withRouter(EditProduct);