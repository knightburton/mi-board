import React from 'react';
import PropTypes from 'prop-types';

export default class IntervalTimer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { active, handleStartStopClick, handleSettingsClick } = this.props;
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
