import React, { useState } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../redux/auth/auth.actions';

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

      <h2 className={style.title}>Registered Customer</h2>

      <form onSubmit={onSubmit} className={style.form}>
        <input 
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />
        <input 
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
        />
        <button>Log In</button>
      </form>

      <div className={style.socialLogins}>
        <h3 className={style.text}>Or Login With</h3>
        <div className={style.buttons}>
          <button>Google</button>
          <button>Facebook</button>
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