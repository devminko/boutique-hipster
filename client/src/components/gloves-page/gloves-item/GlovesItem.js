import React, { } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../../../components-ui/button/Button';

import style from './gloves-item.module.scss';

// *************************** GLOVES ITEM COMPONENT *************************** //
const GlovesItem = ({ glove, history }) => {
  // 'beanie' passed down as prop from GlovesItems.js
  const { id, product_category, product_name, product_color, product_price, product_images, product_url, edit_url, product_quantity, on_sale, sale_discount } = glove;

  return (
    <div className={style.glovesItem}>
      
      {/* ITEM CONTAINER */}
      <div className={style.itemContainer}>
        <div onClick={() => history.push(product_url)} className={style.imageContainer}>
          <img src={product_images[0]} alt={`${product_name}_${product_color}`} className={style.itemImage} />
        </div>
        <div className={style.buttonContainer}>
          <Button item>Add to Cart - ${product_price}.00</Button>
        </div>
      </div>

      {/* PRICE CONTAINER */}
      <div className={style.priceContainer}>
        <p className={style.itemName}>
          {product_name} - {product_color}
        </p>
        <p className={style.itemPrice}>
          ${product_price}.00
        </p>
      </div>

    </div>
  )
};

export default withRouter(GlovesItem);