import React from 'react';
import Helmet from 'react-helmet';

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
        </div>
      </div>
    );
  }
}
