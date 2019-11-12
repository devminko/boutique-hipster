import React, { } from 'react';

import FormInput from './profile-information.module.scss';

import style from './profile-information.module.scss';

// *************************** PROFILE INFORMATION COMPONENT *************************** //
const ProfileInformation = ({ user }) => {
  // 'user' prop passed down from AccountProfile
  const { email, shipping_address, billing_address } = user;

  return (
    <div className={style.profileInformation}>
      
      <p>{email}</p>
      {
        shipping_address !== null
          ? <p>{shipping_address}</p>
          : <p>Enter Your Shipping Address</p> 
      }
      {
        billing_address !== null
          ? <p>{billing_address}</p>
          : <p>Enter Your Billing Address</p>
      }

    </div>
  )
};

export default ProfileInformation;