import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import ToolList from './tool-list/tool-list.component';
import Interval from './interval/interval.container';
import Countdown from './countdown/countdown.container';
import Stopwatch from './stopwatch/stopwatch.component';

export default class Workout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;

    return (
      <div className="wrapper">
        <Helmet>
          <title>MI - Workout</title>
        </Helmet>

        <div className="content">
          <h2 className="text-center my-2">Workout</h2>

          <Switch>
            <Route exact path={`${match.path}`} component={ToolList}/>
            <Route path={`${match.path}/interval`} component={Interval}/>
            <Route path={`${match.path}/countdown`} component={Countdown}/>
            <Route path={`${match.path}/stopwatch`} component={Stopwatch}/>
          </Switch>
        </div>
      </div>
    );
  }
}

Workout.propTypes = {
  match: PropTypes.object.isRequired
};
