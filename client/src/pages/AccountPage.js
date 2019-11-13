import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PageContainer from './page-container/PageContainer';
import AccountLogin from '../components/account-page/account-login/AccountLogin';
import AccountRegister from '../components/account-page/account-register/AccountRegister';
import AccountProfile from '../components/account-page/account-profile/AccountProfile';

// *************************** ACCOUNT PAGE *************************** //
const AccountPage = ({ user }) => {
  const authView = (
    <Fragment>
      <AccountLogin />
      <AccountRegister />
    </Fragment>
  );

  const guestView = (
    <AccountProfile />
  );

  return (
    <PageContainer account>
      
      {
        user === null
          ? authView
          : guestView
      }

    </PageContainer>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(AccountPage);