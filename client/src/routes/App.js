import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadUser } from '../redux/auth/auth.actions';

import Navbar from '../pages/navbar/Navbar';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import Footer from '../pages/footer/Footer';

import Alert from '../components-ui/alert/Alert';

// *************************** APP ROUTES *************************** //
const App = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  },[]);

  return (
    <div>
      <BrowserRouter>
  
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/account' component={AccountPage} />
        </Switch>
        <Footer />

      </BrowserRouter>
    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(loadUser()),
})

export default connect(null, mapDispatchToProps)(App);