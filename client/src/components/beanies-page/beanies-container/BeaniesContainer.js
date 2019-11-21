import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getProducts } from '../../../redux/admin/admin.actions';

import BeaniesItems from '../beanies-items/BeaniesItems';

import style from './beanies-container.module.scss';

// *************************** BEANIES CONTAINER COMPONENT *************************** //
const BeaniesContainer = ({ getProducts }) => {
  useEffect(() => {
    getProducts();
  },[getProducts]);

  return (
    <div className={style.beaniesContainer}>
      
      <BeaniesItems />

    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(null, mapDispatchToProps)(BeaniesContainer);