import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProducts } from '../../../redux/admin/admin.actions';

import EditProduct from '../edit-product/EditProduct';

import style from './edit-products.module.scss';

// *************************** EDIT PRODUCTS COMPONENT *************************** //
const EditProducts = ({ products, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className={style.editProducts}>
      
      {/* PAGE HEADER */}
      <div className={style.header}>
        <h2 className={style.title}>ID</h2>
        <h2 className={style.title}>Category</h2>
        <h2 className={style.title}>Name</h2>
        <h2 className={style.title}>Color</h2>
        <h2 className={style.title}>Price</h2>
        <h2 className={style.title}>Quantity</h2>
        <h2 className={style.title}>On Sale</h2>
        <h2 className={style.title}>Edit</h2>
      </div>

      {/* PRODUCT COLUMNS */}
      <div className={style.productsContainer}>
        {
          products.map(product => (
            <EditProduct key={product.id} product={product} />
          ))
        }
      </div>

      <div className={style.linkContainer}>
        <Link to='/admin/dashboard' className={style.link}>Back to Dashboard</Link>
      </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(EditProducts);