import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUsers } from '../../../redux/admin/admin.actions';

import UsersItems from '../users-items/UsersItems';

import style from './users-container.module.scss';

// *************************** USERS CONTAINER COMPONENT (MAIN USERS PAGE) *************************** //
const UsersContainer = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className={style.usersContainer}>

      {/* USERS HEADER */}
      <div className={style.header}>
        <h2 className={style.title}>ID</h2>
        <h2 className={style.title}>Account Name</h2>
        <h2 className={style.title}>Email</h2>
        <h2 className={style.title}>Shipping City</h2>
        <h2 className={style.title}>Shipping State</h2>
        <h2 className={style.title}>Shipping Zip</h2>
      </div>

      {/* USERS CONTAINER */}
      <div className={style.usersContainer}>
        {
          users.map(user => (
            <UsersItems key={user.id} user={user} />
          ))
        }
      </div>

      <div className={style.linkContainer}>
        <Link to='/admin/dashboard' className={style.link}>Back to Dashboard</Link>
      </div>

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  users: state.admin.users,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);