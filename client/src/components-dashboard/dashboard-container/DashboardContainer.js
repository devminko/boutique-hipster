import React, { } from 'react';
import { Link } from 'react-router-dom';

import style from './dashboard-container.module.scss';

// *************************** DASHBOARD CONTAINER COMPONENT *************************** //
const DashboardContainer = () => {
  return (
    <div className={style.dashboardContainer}>

      <div className={style.dashboardLinks}>
        <Link to='/admin/dashboard/users' className={style.link}>Users</Link>
        <Link to='/admin/dashboard/products' className={style.link}>Products</Link>
        <Link to='/admin/dashboard/create-product' className={style.link}>Create Product</Link>
      </div>

    </div>
  )
};

export default DashboardContainer;