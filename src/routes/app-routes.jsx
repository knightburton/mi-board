import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Profile from '../components/pages/profile/profile.container';
import Dashboard from '../components/pages/dashboard/dashboard.container';
import Time from '../components/pages/time/time.container';
import Todo from '../components/pages/todo/todo.container';

const AppRoutes = () => (
  <Switch>
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route path="/time" component={Time} />
    <Route path="/todo" component={Todo} />
    <Redirect to="/dashboard" />
  </Switch>
);

export default AppRoutes;
