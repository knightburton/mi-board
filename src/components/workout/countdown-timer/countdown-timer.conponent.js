import React from 'react';
import PropTypes from 'prop-types';
import { getTime } from '../utils/timer';

export default class CountdownTimer extends React.Component {

  constructor(props) {
    super(props);

    this.getValidTime = () => {
      const value = this.props.time - this.props.clock;
      return getTime(value > 0 ? value : 0);
    };
  }

  componentWillUnmount() {
    this.props.handleStopClick(this.props.intervalId);
    this.props.handleResetClick();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.clock !== nextProps.clock && nextProps.time - nextProps.clock < 0) {
      this.props.handleStopClick(this.props.intervalId);
    }
  }

  render() {
    const {
      time, clock, active, intervalId,
      handleStartClick, handleStopClick, handleResetClick, handleSettingsClick
    } = this.props;
    const disabled = time - clock <= 0;
    const color = disabled ? 'dark' : 'info';

    return (
      <div className="container-fluid">

        <div className="row my-4">
          <div className="col text-center">
            <div className="row">
              <div className="col">
                <p className={`display-1 font-weight-bold font-monospace text-${color} font-time`}>
                  {this.getValidTime()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-auto">
            {active ? (
              <div className="btn btn-outline-danger btn-sm" onClick={() => handleStopClick(intervalId)}>
                Stop
              </div>
            ) : (
              <button className="btn btn-outline-success btn-sm" disabled={disabled} onClick={handleStartClick}>
                Start
              </button>
            )}
          </div>

          <div className="col-auto">
            <button className="btn btn-outline-danger btn-sm" disabled={active} onClick={handleResetClick}>
              Reset
            </button>
          </div>

          <div className="col-auto">
            <button className="btn btn-outline-secondary btn-sm" disabled={active} onClick={handleSettingsClick}>
              Settings
            </button>
          </div>
        </div>
      </div>
    );
  }
}

CountdownTimer.propTypes = {
  time: PropTypes.number.isRequired,
  clock: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  intervalId: PropTypes.number,
  handleStartClick: PropTypes.func.isRequired,
  handleStopClick: PropTypes.func.isRequired,
  handleResetClick: PropTypes.func.isRequired,
  handleSettingsClick: PropTypes.func.isRequired
};
