import React from 'react';
import PropTypes from 'prop-types';
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
          <p>Create timer....</p>
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
