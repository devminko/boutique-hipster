import React, { } from 'react';

import style from './navbar-menu.module.scss';

// *************************** NAVBAR MENU COMPONENT *************************** //
const NavbarMenu = ({ toggleMenu, setToggleMenu }) => {
  // 'toggleMenu' & 'setToggleMenu' passed down as props from NavbarMobile
  const onClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={style.navbarMenu}>
      
      <div onClick={onClick} className={style.menuFiller} />

      <div className={style.menu}>
        NAVBAR MENU
      </div>

    </div>
  )
};

export default NavbarMenu;