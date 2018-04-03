import React from 'react';
import Helmet from 'react-helmet';
import WorkoutToolList from '../workout-tool-list/workout-tool-list.component';

export default class Workout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Helmet>
          <title>MI - Workout</title>
        </Helmet>

        <div className="content">
          <h2 className="text-center my-2">Workout</h2>
          <p className="text-center text-muted">
            Please select a tool based on your wokrout plan.
          </p>

          <WorkoutToolList />
        </div>
      </div>
    );
  }
}
