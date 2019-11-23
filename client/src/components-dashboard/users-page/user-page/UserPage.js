import React, { } from 'react';

import style from './user-page.module.scss';

// *************************** USER PAGE COMPONENT (SINGLE USER PAGE) *************************** //
const UserPage = ({ user }) => {
  // 'user' passed down as prop from UsersPage.js
  const { id, name, email, shipping_street, shipping_street2, shipping_city, shipping_state, shipping_zip, shipping_country, billing_street, billing_street2, billing_city, billing_state, billing_zip, billing_country, cart, createdAt, updatedAt } = user;
  return (
    <div className={style.userPage}>
      <p>User ID: {id}</p>
      <p>User Name: {name}</p>
      <p>User Email: {email}</p>
      <p>Shipping Street: {shipping_street ? shipping_street : 'N/A'}</p>
      <p>Shipping Street 2: {shipping_street2 ? shipping_street2 : 'N/A'}</p>
      <p>Shipping City: {shipping_city ? shipping_city : 'N/A'}</p>
      <p>Shipping State: {shipping_state ? shipping_state : 'N/A'}</p>
      <p>Shipping Zip: {shipping_zip ? shipping_zip : 'N/A'}</p>
      <p>Shipping Country: {shipping_country ? shipping_country : 'N/A'}</p>
      <p>Billing Street: {billing_street ? billing_street : 'N/A'}</p>
      <p>Billing Street2: {billing_street2 ? billing_street2 : 'N/A'}</p>
      <p>Billing City: {billing_city ? billing_city : 'N/A'}</p>
      <p>Billing State: {billing_state ? billing_state : 'N/A'}</p>
      <p>Billing Zip: {billing_zip ? billing_zip : 'N/A'}</p>
      <p>Billing Country: {billing_country ? billing_country : 'N/A'}</p>
      <div>
        Cart Items:  
        {
          (cart !== null && cart.length > 0)
            ? cart.map(cartItem => (
              <p>{cartItem}</p>
            ))
            : 'N/A'
        }
      </div>
      <p>Account Created: {createdAt}</p>
      <p>Account Updated: {updatedAt}</p>
    </div>
  )
};

export default UserPage;