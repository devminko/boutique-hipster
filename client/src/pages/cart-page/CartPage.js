import React, { } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaTimes } from "react-icons/fa";

import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartTotal } from '../../redux/auth/auth.selectors';

import CartItem from '../../components/cart-page/cart-item/CartItem';
import Button from '../../components-ui/button/Button';

import style from './cart-page.module.scss';

// *************************** CART PAGE *************************** //
const CartPage = ({ cartItems, cart, totalCartPrice, toggleCart, history }) => {
  const onCheckout = () => {
    history.push('/');
    toggleCart();
  };

  return (
    <div className={style.cartPage}>
      
      <div onClick={() => toggleCart()} className={style.cartFiller} />

      {/* CART HEADER */}
      <div className={style.cartContainer}>
        <div className={style.header}>
          <h1 className={style.title}>Cart</h1>
          <FaTimes onClick={() => toggleCart()} className={style.icon} />
        </div>

        {/* CART ITEMS */}
        <div className={style.cartItems}>
          {
            cart.map(cartItem => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          }
        </div>
        
        {/* CART FOOTER / TOTALS */}
        <div className={style.cartTotals}>
          <div className={style.totalsHeader}>
            <h2 className={style.totalsTitle}>Total</h2>
            <p className={style.cartPrice}>${totalCartPrice}.00</p>
          </div>
          <Button onClick={onCheckout} checkout>Go to Checkout</Button>
        </div>
      </div>

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  cart: state.auth.cart,
  totalCartPrice: selectCartTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartPage));