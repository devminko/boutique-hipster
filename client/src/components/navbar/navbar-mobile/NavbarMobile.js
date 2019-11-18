import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IoIosMenu, IoMdClose, IoMdHome, IoMdPerson } from "react-icons/io";
import { AiFillShopping } from "react-icons/ai";

import { toggleCart } from '../../../redux/cart/cart.actions';

import NavbarMenu from '../navbar-menu/NavbarMenu';

import style from './navbar-mobile.module.scss';

// *************************** NAVBAR MOBILE COMPONENT *************************** //
const NavbarMobile = ({ toggleCart }) => {
  const [ toggleMenu, setToggleMenu ] = useState(false);

  const onClick = () => {
    setToggleMenu(!toggleMenu);
  };

  const onToggleCart = () => {
    toggleCart();
  };

  return (
    <nav className={style.navbarMobile}>

      {/* MOBILE MENU */}
      <div className={style.content}>
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
        
        {/* HOME */}
        <div className={style.iconContainer}>
          <Link to='/'>
            <IoMdHome className={style.icon} />
          </Link>
        </div>

        {/* ACCOUNT / LOGIN */}
        <div className={style.iconContainer}>
          <Link to='/account'>
            <IoMdPerson className={style.icon} />
          </Link>
        </div>

        {/* CART */}
        <div className={style.iconContainer}>
          <AiFillShopping onClick={onToggleCart} className={style.icon} />
        </div>
      </div>

    </nav>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(NavbarMobile);