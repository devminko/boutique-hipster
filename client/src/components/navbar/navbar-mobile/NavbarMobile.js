import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu, IoMdClose, IoMdHome, IoMdPerson } from "react-icons/io";
import { AiFillShopping } from "react-icons/ai";

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
          ? <Link to='/'>
              <IoMdClose onClick={onClick} className={style.icon} /> 
            </Link>
          : <Link to='/'>
              <IoIosMenu onClick={onClick} className={style.icon} />
            </Link>
      }
      
      <Link to='/'>
        <IoMdHome className={style.icon} />
      </Link>

      <Link to='/account'>
        <IoMdPerson className={style.icon} />
      </Link>

      <Link to='/'>
        <AiFillShopping className={style.icon} />
      </Link>

    </nav>
  )
};

export default NavbarMobile;