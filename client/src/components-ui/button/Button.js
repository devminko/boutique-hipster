import React, { } from 'react';

import style from './button.module.scss';

// *************************** BUTTON COMPONENT *************************** //
const Button = ({ account, accountInfo, invert, social, profileRed, profileGrey, navbar, children, onClick, ...otherProps }) => {
  return (
    <button 
      className={`
        ${account ? style.account : ''}
        ${accountInfo ? style.accountInfo : ''}
        ${invert ? style.invert : ''}
        ${social ? style.social : ''}
        ${profileRed ? style.profileRed : ''}
        ${profileGrey ? style.profileGrey : ''}
        ${navbar ? style.navbar : ''}
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