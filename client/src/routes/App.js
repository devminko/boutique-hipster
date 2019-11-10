import React, { } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../pages/navbar/Navbar';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';

// *************************** APP ROUTES *************************** //
const App = () => {
  return (
    <div>
      <BrowserRouter>
  
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/account' component={AccountPage} />
        </Switch>

      </BrowserRouter>
    </div>
  )
};

export default App;