import React, { useState } from 'react';

import Button from '../../components-ui/button/Button';
import ProfileInformation from '../../components/profile-information/ProfileInformation';
import ProfileHistory from '../../components/profile-history/ProfileHistory';

import style from './account-profile.module.scss';

// *************************** ACCOUNT PROFILE COMPONENT *************************** //
const AccountProfile = () => {
  const [ toggleInformation, setToggleInformation ] = useState(true);
  const [ toggleHistory, setToggleHistory ] = useState(false);

  const onClickInformation = () => {
    setToggleInformation(true);
    setToggleHistory(false);
  };

  const onClickHistory = () => {
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
        {
          toggleInformation
            ? <Button onClick={onClickInformation} profileRed>Update Profile</Button>
            : <Button onClick={onClickInformation} profileGrey>Update Profile</Button>  
        }
        {
          toggleHistory
            ? <Button onClick={onClickHistory} profileRed>Order History</Button>
            : <Button onClick={onClickHistory} profileGrey>Order History</Button>  
        }
      </div>

      <div className={style.contentContainer}>
        {
          toggleInformation ? <ProfileInformation /> : <ProfileHistory />
        }
      </div>

    </div>
  )
};

export default AccountProfile;