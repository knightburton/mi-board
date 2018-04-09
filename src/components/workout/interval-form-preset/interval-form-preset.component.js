import React from 'react';
import PropTypes from 'prop-types';

export default class IntervalFormPreset extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { name, values, current, handleClick } = this.props;
    const buttons = values.map(value => {
      return (
        <div
          key={`${name}-${value}`}
          className={`btn btn-outline-secondary${current === value ? ' active': ''}`}
          onClick={() => handleClick(value)}>
          {value}
        </div>
      );
    });

    return (
      <div className="form-group">
        <div className="btn-group" id={`${name}-presets`} role="group" aria-label={`${name} presets`}>
          {buttons}
        </div>
      </div>
    );
  }
}

IntervalFormPreset.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};
