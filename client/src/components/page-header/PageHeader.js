import React, { } from 'react';

import style from './page-header.module.scss';

// *************************** PAGE HEADER COMPONENT *************************** //
const PageHeader = ({ children }) => {
  return (
    <div className={style.pageHeader}>

      <h2 className={style.title}>
        {children}
      </h2>
      
    </div>
  )
};

export default PageHeader;