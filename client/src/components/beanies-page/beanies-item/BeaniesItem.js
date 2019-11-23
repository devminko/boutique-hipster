import React, { } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { addItem } from '../../../redux/auth/auth.actions';

import Button from '../../../components-ui/button/Button';

import style from './beanies-item.module.scss';

// *************************** BEANIES ITEM COMPONENT *************************** //
const BeaniesItem = ({ beanie, cart, addItem, history }) => {
  // 'beanie' passed down as prop from BeaniesItems.js
  const { id, product_category, product_name, product_color, product_price, product_images, product_url, product_quantity, on_sale, sale_discount } = beanie;

  return (
    <div className={style.beaniesItem}>
      
      {/* ITEM CONTAINER */}
      <div className={style.itemContainer}>
        <div onClick={() => history.push(product_url)} className={style.imageContainer}>
          <img src={product_images[0]} alt={`${product_name}_${product_color}`} className={style.itemImage} />
        </div>
        <div className={style.buttonContainer}>
          {
            product_quantity > 0
              ? <Button onClick={() => addItem(beanie)} item>Add to Cart - ${product_price}.00</Button>
              : <Button disabled item>Sold Out</Button>
          }
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

// REDUX
const mapStateToProps = (state) => ({
  cart: state.auth.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BeaniesItem));