import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadUser } from '../redux/auth/auth.actions';

import Navbar from '../pages/navbar/Navbar';
import NavbarMobile from '../components/navbar/navbar-mobile/NavbarMobile';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/cart-page/CartPage';
import ExclusivesPage from '../pages/ExclusivesPage';
import AccountPage from '../pages/AccountPage';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/NotFoundPage';
import Footer from '../pages/footer/Footer';

import DashboardPage from '../pages/DashboardPage';
import DashboardProducts from '../components-dashboard/dashboard-products/DashboardProducts';
import EditProducts from '../components-dashboard/edit-page/edit-products/EditProducts';

import Alert from '../components-ui/alert/Alert';

import style from './app.module.scss';

// *************************** APP ROUTES *************************** //
const App = ({ toggleCart, loadUser }) => {
  useEffect(() => {
    loadUser();
  },[loadUser]);

  return (
    <div className={style.app}>
      <BrowserRouter>
  
        <div className={style.content}>
          <Alert />
          <Navbar />
          {
            toggleCart && <CartPage />
          }
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/exclusives' component={ExclusivesPage} />
              <Route exact path='/account' component={AccountPage} />
              <Route exact path='/product/:product_name/:product_id' component={ProductPage} />
              <Route exact path='/admin/dashboard' component={DashboardPage} />
              <Route exact path='/admin/dashboard/add-product' component={DashboardProducts} />
              <Route exact path='/admin/dashboard/edit-product/:product_id' component={EditProducts} />
              <Route component={NotFoundPage} />
            </Switch>
        </div>

        <NavbarMobile />
        <Footer />

      </BrowserRouter>
    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  toggleCart: state.cart.toggleCart,
});

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);