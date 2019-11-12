import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { loadUser } from '../redux/auth/auth.actions';

import PageContainer from './page-container/PageContainer';
import AccountLogin from '../components/account-login/AccountLogin';
import AccountRegister from '../components/account-register/AccountRegister';
import AccountProfile from '../components/account-profile/AccountProfile';

// *************************** ACCOUNT PAGE *************************** //
const AccountPage = ({ user }) => {
  useEffect(() => {
    loadUser();
  }, []);

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