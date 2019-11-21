import React, { } from 'react';
import { NavLink } from 'react-router-dom';

import style from './page-sidebar.module.scss';

// *************************** PAGE SIDEBAR COMPONENT *************************** //
const PageSidebar = ({ linkOne, linkTwo, linkThree }) => {
  return (
    <nav className={`
      ${style.pageSidebar}
    `}>
      <ul className={style.links}>
        <li>
          <NavLink to={`/${linkOne.toLowerCase()}`} className={style.link} activeClassName={style.active}>{linkOne}</NavLink>
        </li>
        <li>
          <NavLink to={`/${linkTwo.toLowerCase()}`} className={style.link} activeClassName={style.active}>{linkTwo}</NavLink>
        </li>
        <li>
          <NavLink to={`/${linkThree.toLowerCase()}`} className={style.link} activeClassName={style.active}>{linkThree}</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default PageSidebar;