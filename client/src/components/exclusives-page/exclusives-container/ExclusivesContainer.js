import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getProducts } from '../../../redux/admin/admin.actions';

import ExclusivesItems from '../exclusives-items/ExclusivesItems';

import style from './exclusives-container.module.scss';

// *************************** EXCLUSIVES CONTAINER COMPONENT *************************** //
const ExclusivesContainer = ({ getProducts }) => {
  useEffect(() => {
    getProducts();
  },[getProducts]);

  return (
    <div className={style.exclusivesContainer}>
      
      <ExclusivesItems />

    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(null, mapDispatchToProps)(ExclusivesContainer);