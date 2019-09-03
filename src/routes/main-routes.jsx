import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from './protected-route/protected-route.container';

import SignIn from '../components/pages/login/login.container';
import App from '../components/app.container';

const MainRoutes = () => (
  <Switch>
    <ProtectedRoute disabledAfterSignIn exact path="/sign-in" component={SignIn} />
    <ProtectedRoute component={App} />
  </Switch>
);

export default MainRoutes;
