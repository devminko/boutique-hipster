import React, { } from 'react';

import style from './home-sections.module.scss';

// *************************** HOME SECTIONS COMPONENT *************************** //
const HomeSections = () => {
  return (
    <div className={style.homeSections}>

      {/* MOBILE CONTAINER - MOBILE VIEW (< 800px) */}
      <div className={style.mobileContainer}>

        MOBILE VIEW

      </div>

      {/* DESKTOP CONTAINER - DESKTOP VIEW (> 800px) */}
      <div className={style.desktopContainer}>

        DESKTOP VIEW
        
      </div>

    </div>
  )
};

export default HomeSections;