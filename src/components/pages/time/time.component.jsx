import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import TopTabs from '../../commons/top-tabs/top-tabs.component';

import Countdown from './countdown/countdown.container';
import Interval from './interval/interval.container';
import Stopwatch from './stopwatch/stopwatch.container';

import Tools from './time.constants';

const Time = ({ location: { pathname } }) => (
  <Fragment>
    <TopTabs items={Tools} selectedByDefault={pathname} />
    <Switch>
      <Route exact path="/time/Interval" component={Interval} />
      <Route exact path="/time/countdown" component={Countdown} />
      <Route exact path="/time/stopwatch" component={Stopwatch} />
      <Redirect to="/time/Interval" />
    </Switch>
  </Fragment>
);

Time.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Time);
