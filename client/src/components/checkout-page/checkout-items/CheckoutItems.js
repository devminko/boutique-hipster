import React, { } from 'react';

import style from './checkout-items.module.scss';

// *************************** CHECKOUT ITEMS COMPONENT *************************** //
const CheckoutItems = ({ cartItem }) => {
  return (
    <div className={style.checkoutItems}>

      <div className={style.imageContainer}>
        <img src={cartItem.product_images[0]} alt='Product Image' className={style.image} />
      </div>

      <div className={style.itemContent}>
        <h3>{cartItem.product_name}</h3>
        <p>Product ID: {cartItem.id}</p>
        <p>Product Name: {cartItem.product_name}</p>
        <p>Product Category: {cartItem.product_category}</p>
        <p>Product Price: {cartItem.product_price}</p>
        <p>Product Quantity: {cartItem.quantity}</p>
      </div>

    </div>
  )
};

export default CheckoutItems;