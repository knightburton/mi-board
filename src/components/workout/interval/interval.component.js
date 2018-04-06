import React from 'react';
import PropTypes from 'prop-types';
import IntervalTimer from '../interval-timer/interval-timer.container';
import IntervalForm from '../interval-form/interval-form.container';

export default class Interval extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { active } = this.props;

    return (
      <div>
        <h3 className="text-center">Interval timer</h3>

        {active ? (
          <IntervalTimer />
        ) : (
          <IntervalForm />
        )}
      </div>
    );
  }
}

Interval.propTypes = {
  active: PropTypes.bool.isRequired
};
