import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IoLogoFacebook, IoLogoGoogle } from 'react-icons/io';

import { setAlert } from '../../../redux/alert/alert.actions';
import { registerUser } from '../../../redux/auth/auth.actions';

import FormInput from '../../../components-ui/form-input/FormInput';
import Button from '../../../components-ui/button/Button';

import style from './account-register.module.scss';

// *************************** ACCOUNT REGISTER COMPONENT *************************** //
const AccountRegister = ({ setAlert, registerUser }) => {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert('Passwords do not match!', 'danger', 2000);
    } else {
      registerUser({ name, email, password });
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    }
  };

  return (
    <div className={style.accountRegister}>
      

      <form onSubmit={onSubmit} className={style.form}>
        <h2 className={style.title}>New Customer</h2>
        <FormInput 
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={onChange}
        />
        <FormInput 
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />
        <FormInput 
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
        />
        <FormInput 
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={onChange}
        />
        <Button account>Create Account</Button>
      </form>

      <div className={style.socialLogins}>
        <h3 className={style.text}>Or Login With</h3>
        <div className={style.buttons}>
          <Button social>
            <span className={style.google}><IoLogoGoogle /></span>
            <span className={style.buttonText}>Google</span>
          </Button>
          <Button social>
            <span className={style.facebook}><IoLogoFacebook /></span>
            <span className={style.buttonText}>Facebook</span>
          </Button>
        </div>
      </div>

    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  setAlert: (msg, alertType, timeout) => dispatch(setAlert(msg, alertType, timeout)),
  registerUser: ({ name, email, password }) => dispatch(registerUser({ name, email, password })),
});

export default connect(null, mapDispatchToProps)(AccountRegister);