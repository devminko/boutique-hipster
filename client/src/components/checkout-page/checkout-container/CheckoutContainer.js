import React, { } from 'react';
import { connect } from 'react-redux';

import { selectCartTotal } from '../../../redux/auth/auth.selectors';

import style from './checkout-container.module.scss';

// *************************** CHECKOUT CONTAINER COMPONENT *************************** //
const CheckoutContainer = ({ user, cart, totalPrice, }) => {
  return (
    <div className={style.checkoutContainer}>
      
      <h3>PLAIN CART ITEMS</h3>
      <div>
        {cart.map(cartItem => (
          <div>
            <h3>{cartItem.product_name}</h3>
            <p>Product ID: {cartItem.id}</p>
            <p>Product Name: {cartItem.product_name}</p>
            <p>Product Category: {cartItem.product_category}</p>
            <p>Product Price: {cartItem.product_price}</p>
            <p>Product Quantity: {cartItem.quantity}</p>
          </div>
        ))}
      </div>

      <div>
        <h3>Total Price</h3>
        Total Price: ${totalPrice}.00
      </div>

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  user: state.auth.user,
  cart: state.auth.cart,
  totalPrice: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckoutContainer);