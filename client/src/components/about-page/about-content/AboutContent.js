import React, { } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../../../components-ui/button/Button';

import style from './about-content.module.scss';

// *************************** ABOUT CONTENT COMPONENT *************************** //
const AboutContent = ({ history }) => {
  return (
    <div className={style.aboutContent}>

      {/* HEADER SECTION */}
      <div className={style.header}>
        <h3 className={style.title}>The Process </h3>
        <div className={style.imageContainer}>
          <img src='../../../assets/images/ABOUT_IMAGE_2.png' alt='Fibers picture' className={style.image} />
          <span className={style.title}>To</span>
          <img src='../../../assets/images/ABOUT_IMAGE_3.png' alt='Fibers picture' className={style.image} />
        </div>
      </div>

      {/* SUBHEADER SECTION */}
      <div className={style.subheader}>
        <p className={style.subtitle}>
          All products are knitted on traditional machineries. The technique used to make these products has been passed down through generations. After the knitting process, the beanies are washed, pressed and checked thoroughly.
        </p>
      </div>

      {/* BUTTON SECTION */}
      <div className={style.buttonContainer}>
        <Button onClick={() => history.push('/exclusives')} aboutPage>Check Out Our Exclusives</Button>
      </div>

    </div>
  )
};

export default withRouter(AboutContent);