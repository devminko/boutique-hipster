import React, { } from 'react';

import FormInput from '../../components-ui/form-input/FormInput';
import Button from '../../components-ui/button/Button';

import style from './profile-information.module.scss';

// *************************** PROFILE INFORMATION COMPONENT *************************** //
const ProfileInformation = ({ user }) => {
  // 'user' prop passed down from AccountProfile
  const { email, shipping_address, billing_address } = user;

  const onLogout = () => {
    console.log('Logout');
    // Will use logoutUser action to replace this once created
  };

  return (
    <div className={style.profileInformation}>

      <form className={style.accountForm}>
        <h3 className={style.title}>Account Details</h3>
        <FormInput
          profile  
          placeholder={email}
        />
        <h3 className={style.title}>Reset Password</h3>
        <FormInput
          profile 
          placeholder='New Password'
        />
        <FormInput
          profile  
          placeholder='Confirm New Password'
        />
        <p className={style.text}>
          Logged in as {email}. Not you? <span onClick={onLogout} className={style.link}>Logout.</span>
        </p>
        <Button>Submit</Button>
      </form>

      <form className={style.accountForm}>
        <h3 className={style.title}>Shipping Address</h3>
        <FormInput
          profile  
          placeholder='Street Name'
        />
        <FormInput
          profile  
          placeholder='Street Name #2'
        />
        <FormInput
          profile  
          placeholder='City'
        />
        <FormInput
          profile  
          placeholder='State'
        />
        <FormInput
          profile  
          placeholder='Zip Code'
        />
        <FormInput
          profile  
          placeholder='Country'
        />
        <Button>Submit</Button>
      </form>

      <form className={style.accountForm}>
        <h3 className={style.title}>Billing Address</h3>
        <FormInput 
          profile
          placeholder='Street Name'
        />
        <FormInput
          profile 
          placeholder='Street Name #2'
        />
        <FormInput
          profile 
          placeholder='City'
        />
        <FormInput
          profile 
          placeholder='State'
        />
        <FormInput
          profile 
          placeholder='Zip Code'
        />
        <FormInput 
          profile
          placeholder='Country'
        />
        <Button>Submit</Button>
      </form>

    </div>
  )
};

export default ProfileInformation;