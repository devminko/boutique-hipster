import React, { } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PageContainer from '../../../pages/page-container/PageContainer';
import ProductItem from '../product-item/ProductItem';

// *************************** PRODUCT CONTAINER *************************** //
const ProductContainer = ({ products, match }) => {
  return (
    <PageContainer>
      {
        products.map(product => (
          product.product_url === match.url
            ? <ProductItem key={product.id} product={product} />
            : ''
        ))
      }
    </PageContainer>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  products: state.admin.products,
})

export default withRouter(connect(mapStateToProps)(ProductContainer));