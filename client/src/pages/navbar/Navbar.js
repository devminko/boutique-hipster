import React, { } from 'react';
import { NavLink, Link } from 'react-router-dom';

import style from './navbar.module.scss';

// *************************** NAVBAR COMPONENT *************************** //
const Navbar = () => {

  const logoContainer = (
    <div className={style.logoContainer}>
      <Link to='/' className={style.logoLink}>
        <h1 className={style.logoTitle}>Boutique Hipster</h1>
        <h2 className={style.logoSubtitle}>Johnsonville</h2>
      </Link>
    </div>
  );

  const links = (
    <ul className={style.links}>
      <li>
        <Link to='/' className={style.link}>Men's</Link>
      </li>
      <li>
        <Link to='/' className={style.link}>Women's</Link>
      </li>
      <li>
        <Link to='/' className={style.link}>Exclusives</Link>
      </li>
      {
        logoContainer
      }
      <li>
        <Link to='/' className={style.link}>Forum</Link>
      </li>
      <li>
        <Link to='/account' className={style.link}>Account</Link>
      </li>
      <li>
        <Link to='/' className={style.link}>Cart (0)</Link>
      </li>
    </ul>
  );

  return (
    <nav className={style.navbar}>

      <div className={style.textContainer}>
        <h3 className={style.text}>Authentic & Handmade</h3>
      </div>
      
      {
        links
      }

    </nav>
  )
};

export default Navbar;