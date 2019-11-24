import React, { } from 'react';

import HomeLanding from '../../components/home-page/home-landing/HomeLanding';
import HomeSections from '../../components/home-page/home-sections/HomeSections';

import style from './home-page.module.scss';

// *************************** HOME PAGE *************************** //
const HomePage = () => {
  return (
    <div className={style.homePage}>
        
      <HomeLanding />

      <div className={style.sections}>
        <HomeSections />
      </div>

    </div>
  )
};

export default HomePage;