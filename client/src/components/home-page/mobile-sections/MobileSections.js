import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import style from './mobile-sections.module.scss';

// *************************** HOME SECTIONS COMPONENT *************************** //
const HomeSections = ({ history }) => {
  return (
    <Fragment>
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
        <h2 onClick={() => history.push('/account')} className={style.mobileTitle}>Sign Up</h2>
      </div>
    </Fragment>
  )
};

export default withRouter(HomeSections);