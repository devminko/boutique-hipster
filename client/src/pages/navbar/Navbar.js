import React, { } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleCart } from '../../redux/cart/cart.actions';
import { logoutUser } from '../../redux/auth/auth.actions';
import { selectCartItemsCount } from '../../redux/auth/auth.selectors';

import Button from '../../components-ui/button/Button';

import style from './navbar.module.scss';

// *************************** NAVBAR COMPONENT *************************** //
const Navbar = ({ isAuthenticated, cartItems, cart, totalCartQuantity, toggleCart, logoutUser }) => {
  const onLogout = () => {
    logoutUser();
    window.location.reload();
  };

  const logoContainer = (
    <div className={style.logoContainer}>
      <Link to='/admin/dashboard' className={style.logoLink}>     {/* CHANGE LINK TO / LATER THIS LEADS TO DASHBOARD*/}
        <h1 className={style.logoTitle}>Boutique Hipster</h1>
        <h2 className={style.logoSubtitle}>Johnsonville</h2>
      </Link>
    </div>
  );

  const links = (
    <ul className={style.links}>
      <li>
        <Link to='/beanies' className={style.link}>Beanies</Link>
      </li>
      <li>
        <Link to='/gloves' className={style.link}>Gloves</Link>
      </li>
      <li>
        <Link to='/exclusives' className={style.link}>Exclusives</Link>
      </li>
      {
        logoContainer
      }
      <li>
        <Link to='/about' className={style.link}>Our Story</Link>
      </li>
      <li>
        <Link to='/account' className={style.link}>Account</Link>
      </li>
      <li>
        <span onClick={toggleCart} className={style.link}>Cart ({totalCartQuantity})</span>
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

      {
        isAuthenticated &&
          <div className={style.button}>
            <Button onClick={onLogout} navbar>Log Out</Button>
          </div>
      }

    </nav>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  cartItems: state.cart.cartItems,
  cart: state.auth.cart,
  totalCartQuantity: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);