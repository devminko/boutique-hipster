import React, { } from 'react';

import style from './users-items.module.scss';

// *************************** USERS ITEMS COMPONENT *************************** //
const UsersItems = ({ user }) => {
  // 'user' passed down as prop from UsersContainer.js
  const { id, name, email, shipping_city, shipping_state, shipping_zip, billing_city, billing_state, billing_zip, cart } = user;

  return (
    <div className={style.usersItems}>
      
      <p className={style.productField}>{id}</p>
      <p className={style.productField}>{name}</p>
      <p className={style.productField}>{email}</p>
      <p className={style.productField}>{shipping_city ? shipping_city : 'N/A'}</p>
      <p className={style.productField}>{shipping_state ? shipping_state : 'N/A'}</p>
      <p className={style.productField}>{shipping_zip ? shipping_zip : 'N/A'}</p>

    </div>
  )
};

export default UsersItems;