import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import Waiting from './common/waiting/waiting';

class App extends React.PureComponent {
  render() {
    const { authIsLoaded, authIsEmpty } = this.props;

    return (
      <Switch>
        {!authIsLoaded && <Route render={() => <Waiting screen />} />}
        {authIsEmpty && <Route component={Login} />}
        <Route exact path="/" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default withRouter(App);
