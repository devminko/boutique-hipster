import React, { } from 'react';
import { connect } from 'react-redux';
import { IoIosRemove, IoIosAdd, IoMdBackspace } from "react-icons/io";

import { addItem, removeItem, clearItem } from '../../../redux/auth/auth.actions';

import style from './checkout-items.module.scss';

// *************************** CHECKOUT ITEMS COMPONENT *************************** //
const CheckoutItems = ({ cartItem, addItem, removeItem }) => {
  // 'cartItem' passed as prop from CheckoutContainer.js
  const { id, product_category, product_name, product_color, product_price, product_description, product_info, product_images, product_url, product_quantity, quantity, on_sale, sale_discount } = cartItem;

  const onAddition = () => {
    addItem(cartItem);
  };

  const onSubtraction = () => {
    removeItem(cartItem);
  };

  let totalPrice = (quantity, price) => {
    return quantity * price;
  };

  return (
    <div className={style.checkoutItems}>

      {/* IMAGE CONTAINER */}
      <div className={style.imageContainer}>
        <img src={product_images[0]} alt='Product Image' className={style.image} />
      </div>

      {/* ITEM CONTENT CONTAINER */}
      <div className={style.itemContent}>
        <div className={style.contentHeader}>
          <h3>{product_name}</h3>
          <p className={style.productColor}>{product_color}</p>
        </div>
        <div className={style.priceContainer}>
          <p>Quantity: {quantity}</p>
          <p>Total Price: ${totalPrice(quantity, product_price)}.00</p>
        </div>
        <div className={style.productQuantity}>
          <IoIosRemove onClick={onSubtraction} className={style.quantityIcon} />
          {1}
          <IoIosAdd onClick={onAddition} className={style.quantityIcon} />
        </div>
      </div>

    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItems);