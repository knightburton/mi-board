import React from 'react';
import PropTypes from 'prop-types';
import IntervalFormSlider from '../interval-form-slider/interval-form-slider.component';
import * as timerUtils from '../utils/timer';

export default class IntervalFormTime extends React.Component {

  constructor(props) {
    super(props);

    this.handleHourChange = event => {
      this.props.onChange(this.props.value - (timerUtils.getHour(this.props.value) * 3600) + (event.value * 3600));
    };

    this.handleMinuteChange = event => {
      this.props.onChange(this.props.value - (timerUtils.getMinute(this.props.value) * 60) + (event.value * 60));
    };

    this.handleSecondChange = event => {
      this.props.onChange(this.props.value - timerUtils.getSecond(this.props.value) + event.value);
    };
  }

  render() {
    const { name, value } = this.props;

    return (
      <div className="form-group">
        <div className="row">
          <div className="col">
            <div
              className="rounded border p-2 text-center mb-3 cursor-pointer"
              data-toggle="collapse"
              href={`#${name}-collapse`}
              role="button"
              aria-expanded="false"
              aria-controls={`${name}-collapse`}>
              <span className="font-weight-bold h3">{timerUtils.getTime(value)}</span>
            </div>
          </div>
        </div>
        <div className="collapse border rounded px-3" id={`${name}-collapse`}>
          <div className="row mt-5">
            <div className="col-1">
              <p>Hour:</p>
            </div>
            <div className="col">
              <IntervalFormSlider
                id="hour-time"
                min={0}
                max={23}
                value={timerUtils.getHour(value)}
                onChange={this.handleHourChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <p>Minute:</p>
            </div>
            <div className="col">
              <IntervalFormSlider
                min={0}
                max={59}
                value={timerUtils.getMinute(value)}
                onChange={this.handleMinuteChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <p>Second:</p>
            </div>
            <div className="col">
              <IntervalFormSlider
                min={0}
                max={59}
                value={timerUtils.getSecond(value)}
                onChange={this.handleSecondChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

IntervalFormTime.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
