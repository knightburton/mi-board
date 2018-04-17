import React from 'react';
import PropTypes from 'prop-types';
import ReactSimpleRange from 'react-simple-range';

export default class FormSlider extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { min, max, value, onChange } = this.props;

    return (
      <ReactSimpleRange
        label
        min={min}
        max={max}
        step={1}
        value={value}
        sliderSize={6}
        thumbSize={12}
        onChange={onChange}
        defaultValue={0}
        trackColor="#343a40"
        thumbColor="#343a40" />
    );
  }
}

FormSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
