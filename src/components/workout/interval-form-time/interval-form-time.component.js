import React from 'react';
import PropTypes from 'prop-types';
import IntervalFormSlider from '../interval-form-slider/interval-form-slider.component';

export default class IntervalFormTime extends React.Component {

  constructor(props) {
    super(props);

    this.getHour = value => Math.floor(value / 3600);
    this.getMinute = value => Math.floor(value % 3600 / 60);
    this.getSecond = value => Math.floor(value % 3600 % 60);

    this.getTime = value => {
      const h = this.getHour(value);
      const m = this.getMinute(value);
      const s = this.getSecond(value);

      return `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
    };

    this.handleHourChange = event => {
      this.props.onChange(this.props.value - (this.getHour(this.props.value) * 3600) + (event.value * 3600));
    };

    this.handleMinuteChange = event => {
      this.props.onChange(this.props.value - (this.getMinute(this.props.value) * 60) + (event.value * 60));
    };

    this.handleSecondChange = event => {
      this.props.onChange(this.props.value - this.getSecond(this.props.value) + event.value);
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
              <span className="font-weight-bold h3">{this.getTime(value)}</span>
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
                value={this.getHour(value)}
                onChange={this.handleHourChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <p>Minut:</p>
            </div>
            <div className="col">
              <IntervalFormSlider
                min={0}
                max={59}
                value={this.getMinute(value)}
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
                value={this.getSecond(value)}
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
