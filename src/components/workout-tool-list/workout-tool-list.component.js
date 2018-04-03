import React from 'react';
import { faClock as farClock } from '@fortawesome/fontawesome-free-regular';
import { faClock, faStopwatch } from '@fortawesome/fontawesome-free-solid';
import WorkoutToolCard from '../workout-tool-card/workout-tool-card.component';

export default class WorkoutToolList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row justify-content-center my-5">
        <div className="col-auto">
          <WorkoutToolCard
            icon={faClock}
            name="Interval timer"
            text="Round based interval with work and rest time." />
        </div>
        <div className="col-auto">
          <WorkoutToolCard
            icon={farClock}
            name="Countdown timer"
            text="It goes down second by second until hit the bottom of the time." />
        </div>
        <div className="col-auto">
          <WorkoutToolCard
            icon={faStopwatch}
            name="Stopwatch timer"
            text="Basic stopwatch timer with lap count function." />
        </div>
      </div>
    );
  }
}
