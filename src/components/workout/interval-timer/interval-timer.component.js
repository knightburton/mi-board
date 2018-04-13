import React from 'react';
import PropTypes from 'prop-types';

export default class IntervalTimer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { active, handleStartStopClick, handleSettingsClick } = this.props;
    const digitStyle = {
      fontSize: '220px'
    };
    const progressBarStyle = {
      width: '50%'
    };

    return (
      <div className="container-fluid">

        <div className="row my-4">
          <div className="col text-center">
            <div className="row">
              <div className="col">
                <span className="display-1" style={digitStyle}>00:00:00</span>
              </div>
            </div>
            <div className="row">
              <div className="col text-right border-right">
                <p className="h4 mb-0">Overall time</p>
                <p className="display-3">00:00:00</p>
              </div>
              <div className="col text-left border-left">
                <p className="h4 mb-0">Rounds</p>
                <p className="display-3">0/10</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-4">
          <div className="col">
            <div className="progress">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={progressBarStyle}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100">
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-auto">
            {active ? (
              <div className="btn btn-outline-danger" onClick={handleStartStopClick}>Stop</div>
            ) : (
              <div className="btn btn-outline-success" onClick={handleStartStopClick}>Start</div>
            )}
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
  active: PropTypes.bool.isRequired,
  handleStartStopClick: PropTypes.func.isRequired,
  handleSettingsClick: PropTypes.func.isRequired
};
