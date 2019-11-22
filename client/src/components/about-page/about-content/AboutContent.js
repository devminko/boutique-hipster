import React, { } from 'react';

import style from './about-content.module.scss';

// *************************** ABOUT CONTENT COMPONENT *************************** //
const AboutContent = () => {
  return (
    <div className={style.aboutContent}>
      <h3 className={style.title}>
        The Process of 
        <br />
        This 
        <br />
        to 
        <br />
        That
      </h3>
      <p>
        All products are knitted on traditional machineries. The technique used to make these products has been passed down through generations. After the knitting process, the beanies are washed, pressed and checked thoroughly.
      </p>
    </div>
  )
};

export default AboutContent;