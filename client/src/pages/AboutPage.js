import React, { } from 'react';

import PageContainer from './page-container/PageContainer';
import AboutHeader from '../components/about-page/about-header/AboutHeader';

import style from './about-page.module.scss';

// *************************** ABOUT PAGE *************************** //
const AboutPage = () => {
  return (
    <div className={style.aboutPage}>

      <AboutHeader />

      OUR STORY PAGE

    </div>
  )
};

export default AboutPage;