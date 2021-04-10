import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Indexes from '../Indexes/Indexes';
import Stocks from '../Stocks/Stocks';
import Profile from '../Profile/Profile';

const Routes = () => (
  <BrowserRouter>
    <header>
      <div className="errors" />
      <Indexes />
    </header>
    <Switch>
      <Route path="/index/:id">
        <Stocks />
      </Route>
      <Route path="/stock/:id">
        <Profile />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
