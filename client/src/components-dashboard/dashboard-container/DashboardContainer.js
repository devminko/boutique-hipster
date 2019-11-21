import React, { } from 'react';
import { Link } from 'react-router-dom';

import style from './dashboard-container.module.scss';

// *************************** DASHBOARD CONTAINER COMPONENT *************************** //
const DashboardContainer = () => {
  return (
    <div className={style.dashboardContainer}>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Link to='/admin/dashboard/create-product'>Create Product</Link>
        <Link to='/admin/dashboard/products'>Edit Product</Link>
      </div>

    </div>
  )
};

export default DashboardContainer;