import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { TiPlus } from 'react-icons/ti';

import { updateBilling } from '../../../redux/auth/auth.actions';

import FormInput from '../../../components-ui/form-input/FormInput';
import Button from '../../../components-ui/button/Button';

import style from './profile-billing.module.scss';

// *************************** PROFILE BILLING COMPONENT *************************** //
const ProfileBilling = ({ user, updateBilling }) => {
  // 'user' prop passed down from ProfileInformation.js

  const { billing_street, billing_street2, billing_city, billing_state, billing_zip, billing_country } = user;

  const [ formData, setFormData ] = useState({
    billing_street: billing_street ? billing_street : '',
    billing_street2: billing_street2 ? billing_street2 : '',
    billing_city: billing_city ? billing_city : '',
    billing_state: billing_state ? billing_state : '',
    billing_zip: billing_zip ? billing_zip : '',
    billing_country: billing_country ? billing_country : '',
  }); 

  const [ toggleInputs, setToggleInputs ] = useState(false);
  const [ isChecked, setIsChecked ] = useState(false);      // true === same details as shipping_address
  
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateBilling(formData);
  };

  const onChecked = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
    if (isChecked && user.shipping_address !== '' && user.billing_address !== '') {
      console.log('Checked / Unchecked');
      return user.billing_address === user.shipping_address
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
              name='billing_street'  
              value={formData.billing_street}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='Street Name #2'
              name='billing_street2'
              value={formData.billing_street2}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='City'
              name='billing_city'
              value={formData.billing_city}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='State'
              name='billing_state'
              value={formData.billing_state}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='Zip Code'
              name='billing_zip'
              value={formData.billing_zip}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='Country'
              name='billing_country'
              value={formData.billing_country}
              onChange={onChange}
            />
            <label className={style.checkboxContainer}>
              <input onClick={onChecked} type='checkbox' className={style.checkmark} disabled={user.shipping_street === null && user.shipping_street === ''} />
              <span className={style.checkboxText}>Same as Shipping?</span>
            </label>
            <Button accountInfo>Submit</Button>
          </Fragment>
      }
    </form>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  updateBilling: (data) => dispatch(updateBilling(data)),
})

export default connect(null, mapDispatchToProps)(ProfileBilling);