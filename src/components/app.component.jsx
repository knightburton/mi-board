import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import Waiting from './common/waiting/waiting.component';

import Login from './login/login.container';
import AppBar from './appbar/appbar.container';
import Drawer from './drawer/drawer.container';
import Wrapper from './wrapper/wrapper.container';

import Profile from './profile/profile.container';
import Dashboard from './dashboard/dashboard.container';
import Time from './time/time.container';
import Todo from './todo/todo.container';

class App extends React.PureComponent {
  static propTypes = {
    authIsLoaded: PropTypes.bool.isRequired,
    authIsEmpty: PropTypes.bool.isRequired,
    isAppWaiting: PropTypes.bool.isRequired
  };

  render() {
    const { authIsLoaded, authIsEmpty, isAppWaiting } = this.props;

    return (
      <Switch>
        {!authIsLoaded && <Route render={() => <Waiting screen />} />}
        {authIsEmpty && <Route component={Login} />}
        <Route
          render={() => (
            <Fragment>
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
              <Waiting open={isAppWaiting} />
            </Fragment>
          )}
        />
      </Switch>
    );
  }
}

export default withRouter(App);
