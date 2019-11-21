import React, { } from 'react';

import style from './about-header.module.scss';

// *************************** ABOUT HEADER COMPONENT *************************** //
const AboutHeader = () => {
  return (
    <div className={style.aboutHeader}>
      
      {/* HEADER */}
      <div className={style.header}>
        <h1 className={style.title}>
          About
          <br />
          <span className={style.titleName}>Boutique Hipster</span>
        </h1>
        <div className={style.subheader}>
          <h3 className={style.subtitle}>
            As a brand in current society we aim for sustainability and durability by using natural fibers only. All products we offer are a 100% bio degradable.
          </h3>
          <br />
          <h3 className={style.subtitle}>
            The ‘Made in Scotland’ label on our items stands for craftsmanship and quality. Our factory was founded over 170 years ago, being one of the oldest factories in the UK.
          </h3>
        </div>
      </div>

      {/* IMAGE CONTAINER */}
      <div className={style.imageContainer}>
        <img src='../../../assets/images/ABOUT_IMAGE_1.jpg' alt='About page image of founder' className={style.image} />
      </div>

    </div>
  )
};

export default AboutHeader;