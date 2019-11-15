import React, { } from 'react';

import ProfileDetails from '../profile-details/ProfileDetails';
import ProfileShipping from '../profile-shipping/ProfileShipping';
import ProfileBilling from '../profile-billing/ProfileBilling';

import style from './profile-information.module.scss';

// *************************** PROFILE INFORMATION COMPONENT *************************** //
const ProfileInformation = ({ user }) => {
  // 'user' prop passed down from AccountProfile
  return (
    <div className={style.profileInformation}>

      <ProfileDetails user={user} />
      <ProfileShipping user={user} />
      <ProfileBilling user={user} />

    </div>
  )
};

export default ProfileInformation;