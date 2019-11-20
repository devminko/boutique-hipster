import React, { } from 'react';

import style from './page-container.module.scss';

// *************************** PAGE CONTAINER *************************** //
const PageContainer = ({ account, notfound, children }) => {
  return (
    <div className={`
      ${account ? style.account : ''}
      ${notfound ? style.notfound : ''}
      ${style.pageContainer}
    `}>
      {children}
    </div>
  )
};

export default PageContainer;