import React, { Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import TopTabs from '../common/top-tabs/top-tabs.container';

import Countdown from './countdown/countdown.container';
import Interval from './interval/interval.container';
import Stopwatch from './stopwatch/stopwatch.container';

import { TOOLS } from './time.constants';

class Time extends React.Component {
  render() {
    const { location: { pathname } } = this.props;

    return (
      <Fragment>
        <TopTabs items={TOOLS} selectedByDefault={pathname} />
        <Switch>
          <Route exact path="/time/Interval" component={Interval} />
          <Route exact path="/time/countdown" component={Countdown} />
          <Route exact path="/time/stopwatch" component={Stopwatch} />
          <Redirect to="/time/Interval" />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(Time);
