import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import Waiting from './common/waiting/waiting.container';

import Login from './login/login.container';
import AppBar from './appbar/appbar.container';
import Drawer from './drawer/drawer.container';
import Wrapper from './wrapper/wrapper.container';

import Dashboard from './dashboard/dashboard.container';
import Time from './time/time.container';

class App extends React.PureComponent {
  render() {
    const { authIsLoaded, authIsEmpty } = this.props;

    return (
      <Switch>
        {!authIsLoaded && <Route render={() => <Waiting screen />} />}
        {authIsEmpty && <Route component={Login} />}
        <Route
          render={
            () => (
              <Fragment>
                <Drawer />
                <Wrapper>
                  <AppBar />
                  <Switch>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route path="/time" component={Time} />
                    <Redirect to="/dashboard" />
                  </Switch>
                </Wrapper>
              </Fragment>
            )
          }
        />
      </Switch>
    );
  }
}

App.propTypes = {
  authIsLoaded: PropTypes.bool.isRequired,
  authIsEmpty: PropTypes.bool.isRequired
};

export default withRouter(App);
