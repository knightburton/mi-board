import React, { Fragment } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import Waiting from './common/waiting/waiting.container';

import Login from './login/login.container';
import AppBar from './appbar/appbar.container';

import Dashboard from './dashboard/dashboard.container';
// import Time from './time/time.container';

class App extends React.PureComponent {
  render() {
    const { authIsLoaded, authIsEmpty } = this.props;

    return (
      <Fragment>
        {authIsLoaded && !authIsEmpty &&
          <AppBar />
        }
        <Switch>
          {!authIsLoaded && <Route render={() => <Waiting screen />} />}
          {authIsEmpty && <Route component={Login} />}
          <Route exact path="/" component={Dashboard} />
          {/* <Route path="/time" component={Time} /> */}
          <Redirect to="/" />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
