import React, { } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../pages/navbar/Navbar';
import HomePage from '../pages/HomePage';

// *************************** APP ROUTES *************************** //
const App = () => {
  return (
    <div>
      <BrowserRouter>
  
        <Navbar />
        <Switch>
          <Route to='/' component={HomePage} />
        </Switch>

      </BrowserRouter>
    </div>
  )
};

export default App;