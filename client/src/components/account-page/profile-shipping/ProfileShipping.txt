import React, { useState } from 'react';

import FormInput from '../../../components-ui/form-input/FormInput';
import Button from '../../../components-ui/button/Button';

import style from './profile-shipping.module.scss';

// *************************** PROFILE SHIPPING COMPONENT *************************** //
const ProfileShipping = ({ shipping_address, billing_address }) => {
  const [ formData, setFormData ] = useState({
    streetOne: '',
    streetTwo: '',
    city: '',
    state: '',
    zipcode: '',
  });

  

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
    // Will replace later with setState update
  };

  return (
    <form onSubmit={onSubmit} className={style.accountForm}>
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
      <Button accountInfo>Submit</Button>
    </form>
  )
};

export default ProfileShipping;