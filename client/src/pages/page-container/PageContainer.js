import React, { } from 'react';

import style from './page-container.module.scss';

// *************************** PAGE CONTAINER *************************** //
const PageContainer = ({ children }) => {
  return (
    <div className={`
      ${style.pageContainer}
    `}>
      {children}
    </div>
  )
};

export default PageContainer;