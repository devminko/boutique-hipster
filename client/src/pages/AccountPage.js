import React, { } from 'react';

import PageContainer from './page-container/PageContainer';
import AccountLogin from '../components/account-login/AccountLogin';
import AccountRegister from '../components/account-register/AccountRegister';

// *************************** ACCOUNT PAGE *************************** //
const AccountPage = () => {
  return (
    <PageContainer account>
      
      <AccountLogin />
      <AccountRegister />

    </PageContainer>
  )
};

export default AccountPage;