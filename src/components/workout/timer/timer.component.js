import React from 'react';
import PropTypes from 'prop-types';

export default class Timer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes, style } = this.prop;

    return (
      <p className={classes} style={style}>00:00:00</p>
    );
  }
}

Timer.propTypes = {
  classes: PropTypes.string,
  style: PropTypes.object
};
