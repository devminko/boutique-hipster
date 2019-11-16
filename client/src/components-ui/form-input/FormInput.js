import React, { } from 'react';

import style from './form-input.module.scss';

// *************************** FORM INPUT COMPONENT *************************** //
const FormInput = ({ profile, newsletter, onChange, ...otherProps }) => {
  return (
    <input 
      className={`
        ${profile ? style.profile : ''}
        ${newsletter ? style.newsletter : ''}
        ${style.formInput}
      `}
      onChange={onChange}
      {...otherProps}
    />
  )
};

export default FormInput;