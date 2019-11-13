import React, { } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../../../redux/auth/auth.actions';

import FormInput from '../../../components-ui/form-input/FormInput';
import Button from '../../../components-ui/button/Button';

import style from './profile-information.module.scss';

// *************************** PROFILE INFORMATION COMPONENT *************************** //
const ProfileInformation = ({ user, logoutUser }) => {
  // 'user' prop passed down from AccountProfile
  const { email, shipping_address, billing_address } = user;

  const onLogout = () => {
    logoutUser();
    window.location.reload();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
    // Will replace later with setState update
  };

  const onChecked = () => {
    console.log('Checked / Unchecked');
  };

  return (
    <div className={style.profileInformation}>

      <form onSubmit={onSubmit} className={style.accountForm}>
        <h3 className={style.title}>Account Details</h3>
        <FormInput
          profile  
          placeholder={email}
          style={{ color: 'black '}}
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
          Logged in as {email}. Not you? <span onClick={() => onLogout()} className={style.link}>Logout.</span>
        </p>
        <Button accountInfo>Submit</Button>
      </form>

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

    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
})

export default connect(null, mapDispatchToProps)(ProfileInformation);