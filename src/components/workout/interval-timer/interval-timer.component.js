import React from 'react';
import PropTypes from 'prop-types';

export default class IntervalTimer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.handleResetClick();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.round !== nextProps.round && nextProps.round > nextProps.repeat) {
      this.props.handleStopClick(this.props.intervalId);
    }
  }

  render() {
    const {
      active,
      percentage,
      color,
      repeat,
      round,
      mainTime,
      overallTime,
      intervalId,
      handleStartClick,
      handleStopClick,
      handleResetClick,
      handleSettingsClick
    } = this.props;

    const digitStyle = {
      fontSize: '220px'
    };
    const progressBarStyle = {
      width: `${percentage}%`
    };

    return (
      <div className="container-fluid">

        <div className="row my-4">
          <div className="col text-center">
            <div className="row">
              <div className="col">
                <p className={`display-1 font-weight-bold font-monospace text-${color}`} style={digitStyle}>
                  {mainTime}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col text-right border-right">
                <p className="h4 mb-0">Overall time</p>
                <p className="display-4 font-weight-bold font-monospace">{overallTime}</p>
              </div>
              <div className="col text-left border-left">
                <p className="h4 mb-0">Rounds</p>
                <p className="display-4 font-weight-bold font-monospace">
                  {`${round > repeat ? round - 1 : round}/${repeat}`}
                </p>
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
                aria-valuenow={percentage}
                aria-valuemin="0"
                aria-valuemax="100">
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-auto">
            {active ? (
              <div className="btn btn-outline-danger" onClick={() => handleStopClick(intervalId)}>
                Stop
              </div>
            ) : (
              <button className="btn btn-outline-success" disabled={round > repeat} onClick={handleStartClick}>
                Start
              </button>
            )}
          </div>

          <div className="col-auto">
            <button className="btn btn-outline-danger" disabled={active} onClick={handleResetClick}>
              Reset
            </button>
          </div>

          <div className="col-auto">
            <button className="btn btn-outline-secondary" disabled={active} onClick={handleSettingsClick}>
              Settings
            </button>
          </div>
        </div>
      </div>
    );
  }
}

IntervalTimer.propTyypes = {
  repeat: PropTypes.number.isRequired,
  round: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  mainTime: PropTypes.string.isRequired,
  overallTime: PropTypes.string.isRequired,
  intervalId: PropTypes.number,
  handleStartClick: PropTypes.func.isRequired,
  handleStopClick: PropTypes.func.isRequired,
  handleResetClick: PropTypes.func.isRequired,
  handleSettingsClick: PropTypes.func.isRequired
};
