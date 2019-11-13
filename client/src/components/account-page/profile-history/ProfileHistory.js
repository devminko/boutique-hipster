import React, { } from 'react';

import style from './profile-history.module.scss';

// *************************** PROFILE HISTORY COMPONENT *************************** //
const ProfileHistory = () => {
  return (
    <div className={style.profileHistory}>
      
      <div className={style.header}>
        <h4 className={style.orderNumber}>Order Number</h4>
        <h4 className={style.orderStatus}>Order Status</h4>
        <h4 className={style.orderDate}>Order Date</h4>
        <h4 className={style.amount}>Amount</h4>
      </div>

    </div>
  )
};

export default ProfileHistory;