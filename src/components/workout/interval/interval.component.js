import React from 'react';
import PropTypes from 'prop-types';
import IntervalTimer from '../interval-timer/interval-timer.container';
import IntervalForm from '../interval-form/interval-form.container';

export default class Interval extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { visible } = this.props;

    return (
      <div>
        <h3 className="text-center">Interval timer</h3>

        {visible ? (
          <IntervalTimer />
        ) : (
          <IntervalForm />
        )}
      </div>
    );
  }
}

Interval.propTypes = {
  visible: PropTypes.bool.isRequired
};
