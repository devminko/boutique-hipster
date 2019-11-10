import React, { } from 'react';

import style from './page-container.module.scss';

// *************************** PAGE CONTAINER *************************** //
const PageContainer = ({ account, children }) => {
  return (
    <div className={`
      ${account ? style.account : ''}
      ${style.pageContainer}
    `}>
      {children}
    </div>
  )
};

export default PageContainer;