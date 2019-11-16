import React, { } from 'react';

import style from './footer-copyright.module.scss';

// *************************** FOOTER COPYRIGHT COMPONENT *************************** //
const FooterCopyright = () => {
  return (
    <div className={style.footerCopyright}>
      <h4 className={style.title}>All Rights Reserved &#169; 2019 - Boutique Hipster</h4>
    </div>
  )
};

export default FooterCopyright;