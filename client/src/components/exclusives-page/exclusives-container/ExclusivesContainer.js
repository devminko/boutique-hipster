import React, { } from 'react';

import ExclusivesItems from '../exclusives-items/ExclusivesItems';

import style from './exclusives-container.module.scss';

// *************************** EXCLUSIVES CONTAINER COMPONENT *************************** //
const ExclusivesContainer = () => {
  return (
    <div className={style.exclusivesContainer}>
      
      <ExclusivesItems />

    </div>
  )
};

export default ExclusivesContainer;