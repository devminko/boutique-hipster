import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUsers } from '../../../redux/admin/admin.actions';

import UserPage from '../user-page/UserPage';

import style from './users-page.module.scss';

// *************************** USERS PAGE COMPONENT *************************** //
const UsersPage = ({ users, getUsers, match, props, user }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const { user_id } = match.params;

  // 'user_id' = string so translate into Number for logic below
  let newUserId = Number(user_id);

  return (
    <div className={style.usersPage}>
      {
        users.map(user => (
          user.id === newUserId
            && <UserPage key={user.id} user={user} />
        ))
      }
    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  users: state.admin.users,
})

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UsersPage));