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

  return (
    <div className={style.editPage}>
      {
        products.map(product => (
          product.edit_url === match.url
            ? <EditItem key={product.id} product={product} />
            : ''
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
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPage));