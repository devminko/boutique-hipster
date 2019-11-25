import React, { } from 'react';
import { connect } from 'react-redux';

import { selectCartItemsCount, selectCartTotal } from '../../../redux/auth/auth.selectors';

import CheckoutItems from '../checkout-items/CheckoutItems';
import Button from '../../../components-ui/button/Button';

import style from './checkout-container.module.scss';

// *************************** CHECKOUT CONTAINER COMPONENT *************************** //
const CheckoutContainer = ({ user, cart, totalCartItems, totalPrice, }) => {
  return (
    <div className={style.checkoutContainer}>
      
      {/******************************* CART CONTAINER HEADER *******************************/}
      <div className={style.cartHeader}>
        <h3 className={style.title}>Your Cart</h3>

        <div className={style.priceContainer}>
          <h4 className={style.price}>Total: ({totalCartItems > 0 ? totalCartItems : 0} items) ${totalPrice}.00</h4>
        </div>
      </div>

      {/****************************** CONTENT SECTION *******************************/}
      <div className={style.contentContainer}>

        {/* ITEMS CONTAINER */}
        <div className={style.itemsContainer}>
          {cart.map(cartItem => (
            <CheckoutItems key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>

        {/* SUMMARY CONTAINER */}
        <div className={style.summaryContainer}>

          <div className={style.buttonsContainer}>
            <Button checkout>Checkout</Button>
          </div>

          <div className={style.orderContainer}>
            <h3 className={style.orderTitle}>Order Summary</h3>
            <div className={style.subtitleContainer}>
              <p className={style.orderSubtitle}>Original Price</p>
              <p className={style.orderSubtitle}>${totalPrice}.00</p>
            </div>
            <div className={style.subtitleContainer}>
              <p className={style.orderSubtitle}>Sale</p>
              <p className={style.orderSubtitle}>$0.00</p>
            </div>
            <div className={style.subtitleContainer}>
              <p className={style.orderSubtitle}>{totalCartItems} Items</p>
              <p className={style.orderSubtitle}>${totalPrice}.00</p>
            </div>
            <div className={style.subtitleContainer}>
              <p className={style.orderSubtitle}>Delivery</p>
              <p className={style.orderSubtitle}>FREE</p>
            </div>
            <div className={style.subtitleContainer}>
              <p className={style.orderSubtitle}>Sales Tax</p>
              <p className={style.orderSubtitle}>-</p>
            </div>
            <div className={style.subtitleContainer}>
              <h3 className={style.orderTitle}>Total</h3>
              <p className={style.orderTitle}>${totalPrice}.00</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  user: state.auth.user,
  cart: state.auth.cart,
  totalCartItems: selectCartItemsCount(state),
  totalPrice: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckoutContainer);