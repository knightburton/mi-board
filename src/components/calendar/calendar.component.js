import React from 'react';
import Helmet from 'react-helmet';

export default class Calendar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Helmet>
          <title>MI - Calendar</title>
        </Helmet>

        <div className="content">
          <h2 className="text-center my-2">Calendar</h2>
          <p className="text-center text-muted">
            This page is under development, please visit back later...
          </p>
        </div>
      </div>
    );
  }
}
