import React, { } from 'react';
import { Link } from 'react-router-dom';

import DashboardProducts from '../dashboard-products/DashboardProducts';

import style from './dashboard-container.module.scss';

// *************************** DASHBOARD CONTAINER COMPONENT *************************** //
const DashboardContainer = () => {
  return (
    <div className={style.dashboardContainer}>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Link to='/admin/dashboard/add-product'>Add Products</Link>
        <Link to='/admin/dashboard/edit-product/:product_id'>Edit Products</Link>
      </div>

    </div>
  )
};

export default DashboardContainer;