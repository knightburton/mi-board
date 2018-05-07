import React from 'react';
import PropTypes from 'prop-types';
import NumericInput from 'react-numeric-input';

export default class FormNumber extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { placeholder, name, value, onChange } = this.props;

    return (
      <NumericInput
        className="form-control form-control-sm"
        min={0}
        max={100}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        aria-describedby={`${name}-help`}
        placeholder={placeholder}
        disabled={false}
        autoFocus={false}
        autoComplete="off"
        autoCorrect="off"
        mobile
        required />
    );
  }
}

FormNumber.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};
