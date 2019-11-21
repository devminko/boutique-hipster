import React, { } from 'react';
import { connect } from 'react-redux';

import GlovesItem from '../gloves-item/GlovesItem';

import style from './gloves-items.module.scss';

// *************************** GLOVES ITEMS COMPONENT *************************** //
const GlovesItems = ({ products }) => {
  return (
    <div className={style.glovesItems}>
      {
        products.map(product => (
          product.product_category === 'gloves'
            && <GlovesItem key={product.id} glove={product} />
        ))
      }
    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  products: state.admin.products,
});

export default connect(mapStateToProps)(GlovesItems);