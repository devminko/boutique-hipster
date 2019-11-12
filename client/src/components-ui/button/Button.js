import React, { } from 'react';

import style from './button.module.scss';

// *************************** BUTTON COMPONENT *************************** //
const Button = ({ account, invert, social, profileRed, profileGrey, children, onClick, ...otherProps }) => {
  return (
    <button 
      className={`
        ${account ? style.account : ''}
        ${invert ? style.invert : ''}
        ${social ? style.social : ''}
        ${profileRed ? style.profileRed : ''}
        ${profileGrey ? style.profileGrey : ''}
        ${style.button}
      `}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  )
};

export default Button;