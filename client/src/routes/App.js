import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadUser } from '../redux/auth/auth.actions';

import Navbar from '../pages/navbar/Navbar';
import NavbarMobile from '../components/navbar/navbar-mobile/NavbarMobile';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import Footer from '../pages/footer/Footer';

import Alert from '../components-ui/alert/Alert';

import style from './app.module.scss';

// *************************** APP ROUTES *************************** //
const App = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  },[loadUser]);

  return (
    <div className={style.app}>
      <BrowserRouter>
  
        <div className={style.content}>
          <Navbar />
            <Alert />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/account' component={AccountPage} />
            </Switch>
        </div>

        <Footer />
        <NavbarMobile />

      </BrowserRouter>
    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser()),
})

export default connect(null, mapDispatchToProps)(App);