import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { TiPlus } from 'react-icons/ti';

import { updateEmail, updatePassword, logoutUser } from '../../../redux/auth/auth.actions';
import { setAlert } from '../../../redux/alert/alert.actions';

import FormInput from '../../../components-ui/form-input/FormInput';
import Button from '../../../components-ui/button/Button';

import style from './profile-details.module.scss';

// *************************** PROFILE DETAILS COMPONENT *************************** //
const ProfileDetails = ({ user, updateEmail, updatePassword, logoutUser, setAlert }) => {
  // 'user' prop passed down from ProfileInformation.js
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { email, password, confirmPassword } = formData;

  let currentEmail = user.email;

  const [ toggleInputs, setToggleInputs ] = useState(false);        // true === menu is opened to begin with

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onLogout = () => {
    logoutUser();
    window.location.reload();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert('Passwords do not match', 'danger', 2000);
    } else if ((password === confirmPassword) && (email === '')) {
      await updatePassword({password});
      setFormData({
        password: '',
        confirmPassword: '',
      });
    } else if (email !== '' && (password && confirmPassword) === '') {
      await updateEmail({email});
      setFormData({
        email: '',
      });
    } else if ((password === confirmPassword) && (email !== '')) {
      await updateEmail({email});
      await updatePassword({password});
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };
  
  return (
    <form onSubmit={onSubmit} className={style.accountForm}>
      <div onClick={() => setToggleInputs(!toggleInputs)} className={style.header}>
        <h3 className={style.headerTitle}>Account Details</h3>
        <span className={style.addIcon}><TiPlus /></span>
      </div>
      {
        toggleInputs &&
        <Fragment>
          <FormInput
            profile
            style={{ color: 'black '}}
            type='email'
            name='email'  
            placeholder='Change email address'
            value={email}
            onChange={onChange}
          />
          <h3 className={style.title}>Reset Password</h3>
          <FormInput
            profile
            type='password'
            name='password' 
            placeholder='New Password'
            value={password}
            onChange={onChange}
          />
          <FormInput
            profile
            type='password'  
            name='confirmPassword'
            placeholder='Confirm New Password'
            value={confirmPassword}
            onChange={onChange}
          />
          <p className={style.text}>
            Logged in as {currentEmail}. Not you? <span onClick={onLogout} className={style.link}>Logout.</span>
          </p>
          <Button accountInfo>Submit</Button>
        </Fragment>
      }
    </form>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  updateEmail: ({email}) => dispatch(updateEmail({email})),
  updatePassword: ({password}) => dispatch(updatePassword({password})),
  logoutUser: () => dispatch(logoutUser()),
  setAlert: (msg, alertType, timeout) => dispatch(setAlert(msg, alertType, timeout)),
})

export default connect(null, mapDispatchToProps)(ProfileDetails);