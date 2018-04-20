import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { getTime } from '../utils/timer';

export default class Stopwatch extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.handleStopClick(this.props.intervalId);
    this.props.handleResetClick();
  }

  render() {
    const {
      laps, clock, active, intervalId,
      handleStartClick, handleStopClick, handleResetClick, handleLapClick, handleClearLapsClick
    } = this.props;

    const lapList = laps.map((l, i) => {
      return (
        <div key={i.toString()} className="row justify-content-center px-3">
          <div className="col-4 h5 text-left">
            <p className="font-monospace font-weight-bold m-0">{i + 1}.</p>
          </div>
          <div className="col-8 h5 text-right">
            <p className="font-monospace font-weight-bold m-0">{getTime(l)}</p>
          </div>
        </div>
      );
    }).reverse();

    const listStyle = {
      maxHeight: '250px'
    };

    return (
      <div className="container-fluid">

        <h3 className="text-center">Stopwatch timer</h3>

        <div className="row my-4">
          <div className="col text-center">
            <div className="row">
              <div className="col">
                <p className="display-1 font-weight-bold font-monospace text-info font-time">
                  {getTime(clock)}
                </p>
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
              <button className="btn btn-outline-success" disabled={active} onClick={handleStartClick}>
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
            <button className="btn btn-outline-success" disabled={laps.length === 0} onClick={handleClearLapsClick}>
              Clear laps
            </button>
          </div>

          <div className="col-auto">
            <button className="btn btn-outline-success" disabled={!active} onClick={() => handleLapClick(clock)}>
              Lap
            </button>
          </div>
        </div>

        {lapList.length !== 0 &&
          <div className="row my-4">
            <div className="col-4 offset-4 justify-content-center text-center border rounded p-0" style={listStyle}>
              <PerfectScrollbar option={{suppressScrollX: true}}>
                {lapList}
              </PerfectScrollbar>
            </div>
          </div>
        }

      </div>
    );
  }
}

Stopwatch.propTypes = {
  laps: PropTypes.array,
  clock: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  intervalId: PropTypes.number,
  handleStartClick: PropTypes.func.isRequired,
  handleStopClick: PropTypes.func.isRequired,
  handleResetClick: PropTypes.func.isRequired,
  handleLapClick: PropTypes.func.isRequired,
  handleClearLapsClick: PropTypes.func.isRequired
};
