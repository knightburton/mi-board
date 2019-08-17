import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import AppBar from './widgets/appbar/appbar.container';
import Drawer from './widgets/drawer/drawer.container';
import Wrapper from './widgets/wrapper/wrapper.container';
import Snackbars from './widgets/snackbars/snackbars.container';
import Waiting from './widgets/waiting/waiting.component';

import Login from './pages/login/login.container';
import Profile from './pages/profile/profile.container';
import Dashboard from './pages/dashboard/dashboard.container';
import Time from './pages/time/time.container';
import Todo from './pages/todo/todo.container';

import { ProfileProvider } from './contexts/profile';

const App = ({ authIsLoaded, authIsEmpty, isAppWaiting }) => (
  <Switch>
    {!authIsLoaded && <Route render={() => <Waiting screen />} />}
    {authIsEmpty && <Route component={Login} />}
    <Route
      render={() => (
        <ProfileProvider>
          <Drawer />
          <Wrapper>
            <AppBar />
            <Switch>
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/time" component={Time} />
              <Route path="/todo" component={Todo} />
              <Redirect to="/dashboard" />
            </Switch>
          </Wrapper>
          {isAppWaiting && <Waiting app />}
          <Snackbars />
        </ProfileProvider>
      )}
    />
  </Switch>
);

App.propTypes = {
  authIsLoaded: PropTypes.bool.isRequired,
  authIsEmpty: PropTypes.bool.isRequired,
  isAppWaiting: PropTypes.bool.isRequired
};

export default withRouter(App);
