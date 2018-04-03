import React from 'react';

export default class Loading extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-center">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }
}
