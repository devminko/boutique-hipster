import React, { } from 'react';
import { connect } from 'react-redux';

import ExclusivesItem from '../exclusives-item/ExclusivesItem';

import style from './exclusives-items.module.scss';

// *************************** EXCLUSIVES ITEMS COMPONENT *************************** //
const ExclusivesItems = ({ products }) => {
  return (
    <div className={style.exclusivesItems}>
      {
        products.map(product => (
          product.product_category === 'exclusives'
            && <ExclusivesItem key={product.id} exclusive={product} />
        ))
      }
    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  exclusives: state.admin.exclusives,
  products: state.admin.products,
});

export default connect(mapStateToProps)(ExclusivesItems);