import React, { useState } from 'react';

import FormInput from '../../../components-ui/form-input/FormInput';
import Button from '../../../components-ui/button/Button';

import style from './profile-billing.module.scss';

// *************************** PROFILE BILLING COMPONENT *************************** //
const ProfileBilling = ({ shipping_address, billing_address }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
    // Will replace later with setState update
  };

  const onChecked = () => {
    console.log('Checked / Unchecked');
  };

  return (
    <form onSubmit={onSubmit} className={style.accountForm}>
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
      <label onClick={onChecked} className={style.checkboxContainer}>
        <input type='checkbox' className={style.checkmark} />
        <span className={style.checkboxText}>Same as Shipping?</span>
      </label>
      <Button accountInfo>Submit</Button>
    </form>
  )
};

export default ProfileBilling;