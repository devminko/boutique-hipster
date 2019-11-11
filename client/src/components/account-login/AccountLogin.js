import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IoLogoFacebook, IoLogoGoogle } from 'react-icons/io';

import { loginUser } from '../../redux/auth/auth.actions';

import FormInput from '../../components-ui/form-input/FormInput';
import Button from '../../components-ui/button/Button';

import style from './account-login.module.scss';

// *************************** ACCOUNT LOGIN COMPONENT *************************** //
const AccountLogin = ({ loginUser }) => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <div className={style.accountLogin}>

      <form onSubmit={onSubmit} className={style.form}>
        <h2 className={style.title}>Registered Customer</h2>
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
        <Button invert>Log In</Button>
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
  loginUser: (email, password) => dispatch(loginUser(email, password)),
});

export default connect(null, mapDispatchToProps)(AccountLogin);