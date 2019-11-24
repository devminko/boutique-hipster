import React, { } from 'react';
import { withRouter } from 'react-router-dom';

import style from './home-landing.module.scss';

// *************************** HOME LANDING COMPONENT *************************** //
const HomeLanding = ({ history }) => {
  const onClick = () => {
    history.push('/exclusives')
  };

  return (
    <div className={style.homeLanding}>

      <h1 onClick={onClick} className={style.landingTitle}>Winter is Coming</h1>
      <h3 onClick={onClick} className={style.subtitle}>We Got You Covered</h3>

    </div>
  )
};

export default withRouter(HomeLanding);