import React from 'react';
import PropTypes from 'prop-types';
import FormSlider from '../form-slider/form-slider.component';
import * as timerUtils from '../utils/timer';

export default class FormTime extends React.Component {

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
    const { name, value, collapsed } = this.props;
    const sClass = !collapsed && ' show';

    return (
      <div className="form-group">
        <div className="row">
          <div className="col">
            <div
              className="rounded border p-2 text-center mb-3 cursor-pointer"
              data-toggle="collapse"
              href={`#${name}-collapse`}
              role="button"
              aria-expanded={!collapsed}
              aria-controls={`${name}-collapse`}>
              <span className="font-weight-bold h3">{timerUtils.getTime(value)}</span>
            </div>
          </div>
        </div>
        <div className={`collapse border rounded px-3${sClass}`} id={`${name}-collapse`}>
          <div className="row mt-5">
            <div className="col-1">
              <p>Hour:</p>
            </div>
            <div className="col">
              <FormSlider
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
              <FormSlider
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
              <FormSlider
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

FormTime.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  collapsed: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

FormTime.defaultProps = {
  collapsed: true
};
