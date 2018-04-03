import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faClock as farClock } from '@fortawesome/fontawesome-free-regular';
import { faClock, faStopwatch } from '@fortawesome/fontawesome-free-solid';
import WorkoutToolCard from '../workout-tool-card/workout-tool-card.component';

export default class WorkoutToolList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <div className="row mt-5">
          <div className="col">
            <p className="text-center text-muted">
              Please select a tool based on your wokrout plan.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-auto">
            <Link
              className="nav-link text-dark"
              to={`${match.path}/interval`}>
              <WorkoutToolCard
                icon={faClock}
                name="Interval timer"
                text="Round based interval with work and rest time." />
            </Link>
          </div>

          <div className="col-auto">
            <Link
              className="nav-link text-dark"
              to={`${match.path}/countdown`}>
              <WorkoutToolCard
                icon={farClock}
                name="Countdown timer"
                text="It goes down second by second until hit the bottom of the time." />
            </Link>
          </div>

          <div className="col-auto">
            <Link
              className="nav-link text-dark"
              to={`${match.path}/stopwatch`}>
              <WorkoutToolCard
                icon={faStopwatch}
                name="Stopwatch timer"
                text="Basic stopwatch timer with lap count function." />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

WorkoutToolList.propTypes = {
  match: PropTypes.object.isRequired
};
