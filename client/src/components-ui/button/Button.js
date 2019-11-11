import React, { } from 'react';

import style from './button.module.scss';

// *************************** BUTTON COMPONENT *************************** //
const Button = ({ account, invert, social, children }) => {
  return (
    <button className={`
      ${account ? style.account : ''}
      ${invert ? style.invert : ''}
      ${social ? style.social : ''}
      ${style.button}
    `}>
      {children}
    </button>
  )
};

export default Button;