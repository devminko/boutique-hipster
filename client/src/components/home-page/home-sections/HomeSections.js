import React, { } from 'react';
import { withRouter } from 'react-router-dom';

import style from './home-sections.module.scss';

// *************************** HOME SECTIONS COMPONENT *************************** //
const HomeSections = ({ history }) => {
  return (
    <div className={style.homeSections}>

      {/* MOBILE CONTAINER - MOBILE VIEW (< 800px) */}
      <div className={style.mobileContainer}>

        <div className={style.mobileSection}>
          <h2 onClick={() => history.push('/beanies')} className={style.mobileTitle}>Beanies</h2>
        </div>

        <div className={style.mobileSection}>
          <h2 onClick={() => history.push('/gloves')} className={style.mobileTitle}>Gloves</h2>
        </div>

        <div className={style.mobileSection}>
          <h2 onClick={() => history.push('/exclusives')} className={style.mobileTitle}>Exclusives</h2>
        </div>

        <div className={style.mobileSection}>
          <h2 onClick={() => history.push('/about')} className={style.mobileTitle}>About</h2>
        </div>

        <div className={style.mobileSection}>
          <h2 onClick={() => history.push('/account')} className={style.mobileTitle}>Sign Up</h2>
        </div>

      </div>

      {/* DESKTOP CONTAINER - DESKTOP VIEW (> 800px) */}
      <div className={style.desktopContainer}>

        DESKTOP VIEW
        
      </div>

    </div>
  )
};

export default withRouter(HomeSections);