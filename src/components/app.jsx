import React, { Fragment } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import Waiting from './common/waiting/waiting';

import Login from './login/login';
import Navbar from './navbar/navbar';

import Dashboard from './dashboard/dashboard';
import Time from './time/time';

class App extends React.PureComponent {
  render() {
    const { authIsLoaded, authIsEmpty } = this.props;

    return (
      <Fragment>
        {authIsLoaded && !authIsEmpty &&
          <Navbar />
        }
        <Switch>
          {!authIsLoaded && <Route render={() => <Waiting screen />} />}
          {authIsEmpty && <Route component={Login} />}
          <Route exact path="/" component={Dashboard} />
          <Route path="/time" component={Time} />
          <Redirect to="/" />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
