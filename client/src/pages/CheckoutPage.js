import React, { } from 'react';

import PageContainer from './page-container/PageContainer';
import CheckoutContainer from '../components/checkout-page/checkout-container/CheckoutContainer';

// *************************** CHECKOUT PAGE *************************** //
const CheckoutPage = ({ user, cart, totalPrice }) => {
  return (
    <PageContainer>

      <CheckoutContainer />

    </PageContainer>
  )
};

export default CheckoutPage;