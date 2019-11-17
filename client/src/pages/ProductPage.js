import React, { } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PageContainer from './page-container/PageContainer';
import ProductItem from '../components/product-page/product-item/ProductItem';

// *************************** PRODUCT PAGE *************************** //
const ProductPage = ({ exclusives, match }) => {
  return (
    <PageContainer>
      {
        exclusives.map(exclusive => (
          exclusive.item_url === match.url
            ? <ProductItem key={exclusive.id} exclusive={exclusive} />
            : ''
        ))
      }
    </PageContainer>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  exclusives: state.admin.exclusives,
})

export default withRouter(connect(mapStateToProps)(ProductPage));