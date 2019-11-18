import React, { } from 'react';

import style from './button.module.scss';

// *************************** BUTTON COMPONENT *************************** //
const Button = ({ account, accountInfo, invert, social, profileRed, profileGrey, navbar, newsletter, item, product, children, onClick, ...otherProps }) => {
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
        ${newsletter ? style.newsletter : ''}
        ${item ? style.item : ''}
        ${product ? style.product : ''}
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