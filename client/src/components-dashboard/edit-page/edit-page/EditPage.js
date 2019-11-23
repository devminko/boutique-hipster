import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProducts } from '../../../redux/admin/admin.actions';

import EditItem from '../edit-item/EditItem';

import style from './edit-page.module.scss';

// *************************** EDIT PAGE COMPONENT *************************** //
const EditPage = ({ products, getProducts, match }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const { product_id } = match.params;

  // 'product_id' = string so translate into Number for logic below
  const newProductId = Number(product_id);

  return (
    <div className={style.editPage}>
      {
        products.map(product => (
          product.id === newProductId
            && <EditItem key={product.id} product={product} />
        ))
      }
    </div>
  ) 
};

// REDUX
const mapStateToProps = (state) => ({
  products: state.admin.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPage));