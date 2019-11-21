import React, { } from 'react';
import { connect } from 'react-redux';

import BeaniesItem from '../beanies-item/BeaniesItem';

import style from './beanies-items.module.scss';

// *************************** BEANIES ITEMS COMPONENT *************************** //
const BeaniesItems = ({ products }) => {
  return (
    <div className={style.beaniesItems}>
      {
        products.map(product => (
          product.product_category === 'beanies'
            && <BeaniesItem key={product.id} beanie={product} />
        ))
      }
    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  products: state.admin.products,
});

export default connect(mapStateToProps)(BeaniesItems);