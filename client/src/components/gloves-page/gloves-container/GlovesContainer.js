import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getProducts } from '../../../redux/admin/admin.actions';

import GlovesItems from '../gloves-items/GlovesItems';

import style from './gloves-container.module.scss';

// *************************** GLOVES CONTAINER COMPONENT *************************** //
const GlovesContainer = ({ getProducts }) => {
  useEffect(() => {
    getProducts();
  },[getProducts]);

  return (
    <div className={style.glovesContainer}>
      
      <GlovesItems />

    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(null, mapDispatchToProps)(GlovesContainer);