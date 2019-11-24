import React, { } from 'react';

import MobileSections from '../mobile-sections/MobileSections';
import DesktopSections from '../desktop-sections/DesktopSections';

import style from './home-sections.module.scss';

// *************************** HOME SECTIONS COMPONENT *************************** //
const HomeSections = () => {
  return (
    <div className={style.homeSections}>

      {/* MOBILE CONTAINER - MOBILE VIEW (< 800px) */}
      <div className={style.mobileContainer}>
        <MobileSections />
      </div>

      {/* DESKTOP CONTAINER - DESKTOP VIEW (> 800px) */}
      <div className={style.desktopContainer}>

        <DesktopSections />
        
      </div>

    </div>
  )
};

export default HomeSections;