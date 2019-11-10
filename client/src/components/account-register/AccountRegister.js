import React, { useState } from 'react';
import { connect } from 'react-redux';

import { registerUser } from '../../redux/auth/auth.actions';

import style from './account-register.module.scss';

// *************************** ACCOUNT REGISTER COMPONENT *************************** //
const AccountRegister = ({ registerUser }) => {
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
      alert('Passwords do not match!');
    } else {
      registerUser({ name, email, password });
    }
  };

  return (
    <div className={style.accountRegister}>
      
      <h2 className={style.title}>New Customer</h2>

      <form onSubmit={onSubmit} className={style.form}>
        <input 
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={onChange}
        />
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
        <input 
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={onChange}
        />
        <button>Create Account</button>
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
  registerUser: ({ name, email, password }) => dispatch(registerUser({ name, email, password })),
});

export default connect(null, mapDispatchToProps)(AccountRegister);