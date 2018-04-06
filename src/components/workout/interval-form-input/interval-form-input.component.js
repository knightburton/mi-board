import React from 'react';
import PropTypes from 'prop-types';
import NumericInput from 'react-numeric-input';

export default class IntervalFormInput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { label, help, placeholder, name, value, onChange } = this.props;
    const min = name === 'repeat' ? 1 : 0;
    const max = name === 'repeat' ? 100 : 60;

    return (
      <div className="form-group">
        <label htmlFor="repeat">{label}:</label>
        <NumericInput
          className="form-control"
          min={min}
          max={max}
          value={value}
          name={name}
          id={name}
          onChange={onChange}
          aria-describedby={`${name}-help`}
          placeholder={placeholder}
          required />
        <small id={`${name}-help`} className="form-text text-muted">
          <p>{help}</p>
        </small>
      </div>
    );
  }
}

IntervalFormInput.propTypes = {
  label: PropTypes.string.isRequired,
  help: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};
