import React, { } from 'react';

import style from './form-input.module.scss';

// *************************** FORM INPUT COMPONENT *************************** //
const FormInput = ({ onChange, ...otherProps }) => {
  return (
    <input 
      className={`
        ${style.formInput}
      `}
      onChange={onChange}
      {...otherProps}
    />
  )
};

export default FormInput;