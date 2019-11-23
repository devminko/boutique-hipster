import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadUser } from '../redux/auth/auth.actions';

import Navbar from '../pages/navbar/Navbar';
import NavbarMobile from '../components/navbar/navbar-mobile/NavbarMobile';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/cart-page/CartPage';
import BeaniesPage from '../pages/BeaniesPage';
import GlovesPage from '../pages/GlovesPage';
import ExclusivesPage from '../pages/ExclusivesPage';
import AboutPage from '../pages/about-page/AboutPage';
import AccountPage from '../pages/AccountPage';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/NotFoundPage';
import Footer from '../pages/footer/Footer';

import DashboardPage from '../pages/DashboardPage';
import UsersContainer from '../components-dashboard/users-page/users-container/UsersContainer';
import UsersPage from '../components-dashboard/users-page/users-page/UsersPage';
import CreateProduct from '../components-dashboard/create-page/create-product/CreateProduct';
import EditProducts from '../components-dashboard/edit-page/edit-products/EditProducts';
import EditPage from '../components-dashboard/edit-page/edit-page/EditPage';

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
              <Route exact path='/beanies' component={BeaniesPage} />
              <Route exact path='/gloves' component={GlovesPage} />
              <Route exact path='/exclusives' component={ExclusivesPage} />
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/account' component={AccountPage} />
              <Route exact path='/product/:product_name/:product_id' component={ProductPage} />
              
              <Route exact path='/admin/dashboard' component={DashboardPage} />
              <Route exact path='/admin/dashboard/users' component={UsersContainer} />
              <Route exact path='/admin/dashboard/users/:user_id' component={UsersPage} />
              <Route exact path='/admin/dashboard/create-product' component={CreateProduct} />
              <Route exact path='/admin/dashboard/products' component={EditProducts} />
              <Route exact path='/admin/dashboard/products/edit-product/:product_id' component={EditPage} />
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