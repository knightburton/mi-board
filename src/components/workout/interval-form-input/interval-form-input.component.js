import React from 'react';
import PropTypes from 'prop-types';

export default class IntervalFormInput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { label, help, placeholder, name, value, onChange } = this.props;
    const max = name === 'repeat' ? 100 : 60;

    return (
      <div className="form-group">
        <label htmlFor="repeat">{label}:</label>
        <input
          type="number"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          min={0}
          max={max}
          className="form-control"
          aria-describedby={`${name}-help`}
          placeholder={placeholder} />
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
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
