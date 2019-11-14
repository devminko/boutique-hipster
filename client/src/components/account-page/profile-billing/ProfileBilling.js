import React, { Fragment, useState } from 'react';
import { TiPlus } from 'react-icons/ti';

import FormInput from '../../../components-ui/form-input/FormInput';
import Button from '../../../components-ui/button/Button';

import style from './profile-billing.module.scss';

// *************************** PROFILE BILLING COMPONENT *************************** //
const ProfileBilling = ({ shipping_address, billing_address }) => {
  const [ formData, setFormData ] = useState({
    streetOne: '',
    streetTwo: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
  });

  const [ toggleInputs, setToggleInputs ] = useState(false);
  const [ isChecked, setIsChecked ] = useState(false);      // true === same details as shipping_address
  
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
    // Will replace later with setState update
  };

  const onChecked = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
    if (isChecked && shipping_address !== null && billing_address !== null) {
      console.log('Checked / Unchecked');
      return billing_address === shipping_address
    } else {
      console.log('No shipping address to copy')
    }
  };

  return (
    <form onSubmit={onSubmit} className={style.accountForm}>
      <div onClick={() => setToggleInputs(!toggleInputs)} className={style.header}>
        <h3 className={style.headerTitle}>Billing Address</h3>
        <span className={style.addIcon}><TiPlus /></span>
      </div>
      {
        toggleInputs &&
          <Fragment>
            <FormInput
              profile
              type='text'
              placeholder='Street Name'
              name='streetOne'  
              value={formData.streetOne}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='Street Name #2'
              name='streetTwo'
              value={formData.streetTwo}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='City'
              name='city'
              value={formData.city}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='State'
              name='state'
              value={formData.state}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='Zip Code'
              name='zipcode'
              value={formData.zipcode}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='Country'
              name='country'
              value={formData.country}
              onChange={onChange}
            />
            <label className={style.checkboxContainer}>
              <input onClick={onChecked} type='checkbox' className={style.checkmark} disabled={shipping_address === null} />
              <span className={style.checkboxText}>Same as Shipping?</span>
            </label>
            <Button accountInfo>Submit</Button>
          </Fragment>
      }
    </form>
  )
};

export default ProfileBilling;