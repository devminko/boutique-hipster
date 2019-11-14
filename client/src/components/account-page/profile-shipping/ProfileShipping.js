import React, { Fragment, useState } from 'react';
import { TiPlus } from 'react-icons/ti';

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
    country: '',
  });

  const [ toggleInputs, setToggleInputs ] = useState(false);

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

  return (
    <form onSubmit={onSubmit} className={style.accountForm}>
      <div onClick={() => setToggleInputs(!toggleInputs)} className={style.header}>
        <h3 className={style.headerTitle}>Shipping Address</h3>
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
            <Button accountInfo>Submit</Button>
          </Fragment>
      }
    </form>
  )
};

export default ProfileShipping;