import React, { } from 'react';

import ProfileDetails from '../profile-details/ProfileDetails';
import ProfileShipping from '../profile-shipping/ProfileShipping';
import ProfileBilling from '../profile-billing/ProfileBilling';

import style from './profile-information.module.scss';

// *************************** PROFILE INFORMATION COMPONENT *************************** //
const ProfileInformation = ({ user }) => {
  // 'user' prop passed down from AccountProfile
  const { email, shipping_address, billing_address } = user;

  return (
    <div className={style.profileInformation}>

      <ProfileDetails email={email} />
      <ProfileShipping shipping_address={shipping_address} billing_address={billing_address} />
      <ProfileBilling shipping_address={shipping_address} billing_address={billing_address} />

    </div>
  )
};

export default ProfileInformation;