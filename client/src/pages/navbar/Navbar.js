import React, { } from 'react';
import { NavLink, Link } from 'react-router-dom';

import style from './navbar.module.scss';

// *************************** NAVBAR COMPONENT *************************** //
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      
      <div className={style.logoContainer}>
        <h1 className={style.logoTitle}>Boutique Hipster</h1>
        <h2 className={style.logoSubtitle}>Johnsonville</h2>
      </div>

    </nav>
  )
};

export default Navbar;