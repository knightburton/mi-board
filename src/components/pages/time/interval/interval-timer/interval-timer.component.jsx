import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import StartIcon from '@material-ui/icons/PlayArrowOutlined';
import StopIcon from '@material-ui/icons/StopOutlined';
import RestartIcon from '@material-ui/icons/RestoreOutlined';

import Section from '../../../../commons/section/section.container';

const IntervalTimer = ({ isActive }) => (
  <Section>
    <Button variant="contained" size="small" color="secondary">
      Restart
      <RestartIcon />
    </Button>
    <Button variant="contained" size="small" color="primary">
      {isActive ? 'Stop' : 'Start'}
      {isActive ? <StopIcon /> : <StartIcon />}
    </Button>
  </Section>
);

IntervalTimer.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default IntervalTimer;
