import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProducts } from '../../../redux/admin/admin.actions';

import PageContainer from '../../../pages/page-container/PageContainer';
import ProductItem from '../product-item/ProductItem';
import ProductFooter from '../product-footer/ProductFooter';

// *************************** PRODUCT CONTAINER *************************** //
const ProductContainer = ({ products, getProducts, match }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <PageContainer>

      {/* PRODUCT ITEM */}
      {
        products.map(product => (
          product.product_url === match.url
            && <ProductItem key={product.id} product={product} />
        ))
      }

      {/* PRODUCT FOOTER */}
      <ProductFooter />

    </PageContainer>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  products: state.admin.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductContainer));