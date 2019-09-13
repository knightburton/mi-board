import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

import IntervalForm from './interval-form/interval-form.container';
import IntervalTimer from './interval-timer/interval-timer.container';

const Interval = ({ visibleTimer }) => (
  <Container maxWidth="md">

    {visibleTimer && visibleTimer === 'interval' ? (
      <IntervalTimer />
    ) : (
      <IntervalForm />
    )}

  </Container>
);

Interval.propTypes = {
  visibleTimer: PropTypes.string,
};

Interval.defaultProps = {
  visibleTimer: null,
};

export default Interval;
