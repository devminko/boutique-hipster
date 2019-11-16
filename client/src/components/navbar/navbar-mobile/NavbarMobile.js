import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu, IoMdClose, IoMdHome, IoMdPerson } from "react-icons/io";
import { AiFillShopping } from "react-icons/ai";

import NavbarMenu from '../navbar-menu/NavbarMenu';

import style from './navbar-mobile.module.scss';

// *************************** NAVBAR MOBILE COMPONENT *************************** //
const NavbarMobile = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);

  const onClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className={style.navbarMobile}>

      {
        toggleMenu 
          ? <div className={style.iconContainer}>
              <NavbarMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
              <IoMdClose onClick={onClick} className={style.icon} /> 
            </div>
          : <div className={style.iconContainer}>
              <IoIosMenu onClick={onClick} className={style.icon} />
            </div>
      }
      
      <div className={style.iconContainer}>
        <Link to='/'>
          <IoMdHome className={style.icon} />
        </Link>
      </div>

      <div className={style.iconContainer}>
        <Link to='/account'>
          <IoMdPerson className={style.icon} />
        </Link>
      </div>

      <div className={style.iconContainer}>
        <Link to='/'>
          <AiFillShopping className={style.icon} />
        </Link>
      </div>

    </nav>
  )
};

export default NavbarMobile;