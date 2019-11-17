import React, { } from 'react';

import style from './exclusives-header.module.scss';

// *************************** EXCLUSIVES HEADER COMPONENT *************************** //
const ExclusivesHeader = () => {
  return (
    <div className={style.exclusivesHeader}>
      <h2 className={style.title}>EXCLUSIVES</h2>
    </div>
  )
};

export default ExclusivesHeader;