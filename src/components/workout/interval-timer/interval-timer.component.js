import React from 'react';
import PropTypes from 'prop-types';

export default class IntervalTimer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { handleSettingsClick } = this.props;
    const style = {
      width: '50%'
    };

    return (
      <div className="container-fluid">

        <div className="row my-4">
          <div className="col">
            <p>Timer...</p>
          </div>
        </div>

        <div className="row my-4">
          <div className="col">
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={style}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100">
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-auto">
            <div className="btn btn-outline-success">Start/Stop</div>
          </div>

          <div className="col-auto">
            <div className="btn btn-outline-danger">Reset</div>
          </div>

          <div className="col-auto">
            <div className="btn btn-outline-secondary" onClick={handleSettingsClick}>Settings</div>
          </div>
        </div>
      </div>
    );
  }
}

IntervalTimer.propTyypes = {
  handleSettingsClick: PropTypes.func.isRequired
};
