import React, { } from 'react';
import { connect } from 'react-redux';
import { FaTimes } from "react-icons/fa";

import { toggleCart } from '../../redux/cart/cart.actions';

import style from './cart-page.module.scss';

// *************************** CART PAGE *************************** //
const CartPage = ({ toggleCart }) => {
  return (
    <div className={style.cartPage}>
      
      <div onClick={() => toggleCart()} className={style.cartFiller} />

      <div className={style.cartContainer}>
        <div className={style.header}>
          <h1 className={style.title}>Cart</h1>
          <FaTimes onClick={() => toggleCart()} className={style.icon} />
        </div>

        <div className={style.cartItems}>
          CART ITEMS
        </div>

        <div className={style.cartTotals}>
          <div className={style.totalsHeader}>
            <h2 className={style.totalsTitle}>Total</h2>
            <p className={style.cartPrice}>$0.00</p>
          </div>
        </div>
      </div>

    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(CartPage);