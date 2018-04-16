import React from 'react';
import PropTypes from 'prop-types';
import CountdownTimer from '../countdown-timer/countdown-timer.conponent';
import CountdownForm from '../countdown-form/countdown-form.component';

export default class Countdown extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { visible } = this.props;

    return (
      <div>
        <h3 className="text-center">Countdown timer</h3>

        {visible ? (
          <CountdownTimer />
        ) : (
          <CountdownForm />
        )}
      </div>
    );
  }
}

Countdown.propTypes = {
  visible: PropTypes.bool.isRequired
};
