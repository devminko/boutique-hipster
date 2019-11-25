import React, { } from 'react';
import { withRouter } from 'react-router-dom';

import DesktopProducts from '../desktop-products/DesktopProducts';

import style from './desktop-sections.module.scss';

// *************************** HOME SECTIONS COMPONENT *************************** //
const DesktopSections = ({ history }) => {
  return (
    <div className={style.desktopSections}>

      {/* TOP SECTION */}
      {/* <div className={style.topSection}>
        <div className={style.desktopSection}>
          <h2 onClick={() => history.push('/gloves')} className={style.desktopTitle}>Gloves</h2>
        </div>

        <div className={style.desktopSection}>
          <h2 onClick={() => history.push('/beanies')} className={style.desktopTitle}>Beanies</h2>
        </div>
      </div> */}

      {/* PRODUCTS SECTION */}
      <div className={style.productsSection}>
        <DesktopProducts />
      </div>

      {/* <div className={style.desktopSection}>
        <h2 onClick={() => history.push('/exclusives')} className={style.desktopTitle}>Exclusives</h2>
      </div>

      <div className={style.desktopSection}>
        <h2 onClick={() => history.push('/account')} className={style.desktopTitle}>Sign Up</h2>
      </div> */}

    </div>
  )
};

export default withRouter(DesktopSections);