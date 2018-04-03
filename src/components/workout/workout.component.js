import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import WorkoutToolList from '../workout-tool-list/workout-tool-list.component';
import WorkoutInterval from '../workout-interval/workout-interval.component';
import WorkoutCountdown from '../workout-countdown/workout-countdown.component';
import WorkoutStopwatch from '../workout-stopwatch/workout-stopwatch.component';

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
            <Route exact path={`${match.path}`} component={WorkoutToolList}/>
            <Route path={`${match.path}/interval`} component={WorkoutInterval}/>
            <Route path={`${match.path}/countdown`} component={WorkoutCountdown}/>
            <Route path={`${match.path}/stopwatch`} component={WorkoutStopwatch}/>
          </Switch>
        </div>
      </div>
    );
  }
}

Workout.propTypes = {
  match: PropTypes.object.isRequired
};
