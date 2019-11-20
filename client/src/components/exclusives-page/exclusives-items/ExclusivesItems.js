import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getProducts } from '../../../redux/admin/admin.actions';

import ExclusivesItem from '../exclusives-item/ExclusivesItem';

import style from './exclusives-items.module.scss';

// *************************** EXCLUSIVES ITEMS COMPONENT *************************** //
const ExclusivesItems = ({ products, getProducts }) => {
  useEffect(() => {
    getProducts();
  },[getProducts]);

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

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExclusivesItems);