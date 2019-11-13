import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components-ui/button/Button';
import ProfileInformation from '../profile-information/ProfileInformation';
import ProfileHistory from '../profile-history/ProfileHistory';

import style from './account-profile.module.scss';

// *************************** ACCOUNT PROFILE COMPONENT *************************** //
const AccountProfile = ({ user }) => {
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
        <h1 className={style.title}>WELCOME</h1>
        <p className={style.subtitle}>
          Your account profile is where you can update your personal information and view your recent purchases. Enjoy your stay with Boutique Hipster.
        </p>
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
          toggleInformation ? <ProfileInformation user={user} /> : <ProfileHistory user={user} />
        }
      </div>

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  user: state.auth.user,
})

export default connect(mapStateToProps)(AccountProfile);