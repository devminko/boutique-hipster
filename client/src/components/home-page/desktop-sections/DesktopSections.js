import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import style from './desktop-sections.module.scss';

// *************************** HOME SECTIONS COMPONENT *************************** //
const HomeSections = ({ history }) => {
  return (
    <Fragment>
      <div className={style.desktopSection}>
        <h2 onClick={() => history.push('/beanies')} className={style.desktopTitle}>Beanies</h2>
      </div>

      <div className={style.desktopSection}>
        <h2 onClick={() => history.push('/gloves')} className={style.desktopTitle}>Gloves</h2>
      </div>

      <div className={style.desktopSection}>
        <h2 onClick={() => history.push('/exclusives')} className={style.desktopTitle}>Exclusives</h2>
      </div>

      <div className={style.desktopSection}>
        <h2 onClick={() => history.push('/account')} className={style.desktopTitle}>Sign Up</h2>
      </div>
    </Fragment>
  )
};

export default withRouter(HomeSections);