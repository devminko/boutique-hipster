import React, { useState } from 'react';

import style from './account-register.module.scss';

// *************************** ACCOUNT REGISTER COMPONENT *************************** //
const AccountRegister = () => {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    console.log('Changed');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className={style.accountRegister}>
      
      <h2 className={style.title}>New Customer</h2>

      <form onSubmit={(e) => onSubmit(e)} className={style.form}>
        <input 
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={(e) => onChange(e)}
        />
        <input 
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={(e) => onChange(e)}
        />
        <input 
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={(e) => onChange(e)}
        />
        <button type='submit'>Create Account</button>
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

export default AccountRegister;