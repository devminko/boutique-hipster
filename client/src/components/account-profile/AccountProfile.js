import React, { useState } from 'react';

import Button from '../../components-ui/button/Button';
import FormInput from '../../components-ui/form-input/FormInput';
import ProfileInformation from '../../components/profile-information/ProfileInformation';
import ProfileHistory from '../../components/profile-history/ProfileHistory';

import style from './account-profile.module.scss';

// *************************** ACCOUNT PROFILE COMPONENT *************************** //
const AccountProfile = () => {
  const [ toggleInformation, setToggleInformation ] = useState(true);
  const [ toggleHistory, setToggleHistory ] = useState(false);

  const onToggleInfo = (e) => {
    setToggleInformation(true);
    setToggleHistory(false);
  };

  const onToggleHistory = (e) => {
    setToggleInformation(false);
    setToggleHistory(true);
  };

  return (
    <div className={style.accountProfile}>
      
      <div className={style.header}>
        <h1 className={style.title}>ACCOUNT PROFILE</h1>
        <p className={style.subtitle}>Update your Information Below</p>
      </div>

      <div className={style.buttons}>
        <Button onClick={onToggleInfo}>Update Profile</Button>
        <Button onClick={onToggleHistory}>Order History</Button>
      </div>

      {
        toggleInformation ? <ProfileInformation /> : <ProfileHistory />
      }

    </div>
  )
};

export default AccountProfile;