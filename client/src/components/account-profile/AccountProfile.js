import React, { } from 'react';

import Button from '../../components-ui/button/Button';
import FormInput from '../../components-ui/form-input/FormInput';

import style from './account-profile.module.scss';

// *************************** ACCOUNT PROFILE COMPONENT *************************** //
const AccountProfile = () => {
  return (
    <div className={style.accountProfile}>
      
      <div className={style.header}>
        <h1 className={style.title}>ACCOUNT PROFILE</h1>
        <p className={style.subtitle}>Update your Information Below</p>
      </div>

      <div className={style.buttons}>
        <Button>Update Profile</Button>
        <Button>Order History</Button>
      </div>

    </div>
  )
};

export default AccountProfile;