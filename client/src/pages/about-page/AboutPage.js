import React, { } from 'react';

import AboutHeader from '../../components/about-page/about-header/AboutHeader';
import AboutContent from '../../components/about-page/about-content/AboutContent';

import style from './about-page.module.scss';

// *************************** ABOUT PAGE *************************** //
const AboutPage = () => {
  return (
    <div className={style.aboutPage}>

      <AboutHeader />
      <AboutContent />

    </div>
  )
};

export default AboutPage;