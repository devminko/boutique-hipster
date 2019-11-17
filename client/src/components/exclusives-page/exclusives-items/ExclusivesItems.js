import React, { } from 'react';
import { connect } from 'react-redux';

import ExclusivesItem from '../exclusives-item/ExclusivesItem';

import style from './exclusives-items.module.scss';

// *************************** EXCLUSIVES ITEMS COMPONENT *************************** //
const ExclusivesItems = ({ exclusives }) => {
  return (
    <div className={style.exclusivesItems}>
      {
        exclusives.map(exclusive => (
          <ExclusivesItem exclusive={exclusive} />
        ))
      }
    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  exclusives: state.admin.exclusives,
});

export default connect(mapStateToProps)(ExclusivesItems);