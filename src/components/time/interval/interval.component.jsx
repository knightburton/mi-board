import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

import IntervalForm from './interval-form/interval-form.container';
import IntervalTimer from './interval-timer/interval-timer.container';

export default class Interval extends React.PureComponent {
  static propTypes = {
    visibleTimer: PropTypes.string
  };

  static defaultProps = {
    visibleTimer: null
  };

  render() {
    const { visibleTimer } = this.props;

    return (
      <Container maxWidth="md">

        {visibleTimer && visibleTimer === 'interval'
          ? <IntervalTimer />
          : <IntervalForm />
        }

      </Container>
    );
  }
}
