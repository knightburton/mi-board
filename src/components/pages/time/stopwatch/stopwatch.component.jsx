import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import PlayIcon from '@material-ui/icons/PlayArrowOutlined';
import StopIcon from '@material-ui/icons/StopOutlined';
import ResetIcon from '@material-ui/icons/SettingsBackupRestoreOutlined';
import LapIcon from '@material-ui/icons/FlagOutlined';

import Section from '../../../commons/section/section.container';
import LapsActionsMenu from './laps-actions-menu/laps-actions-menu.container';
import LapsList from './laps-list/laps-list.component';

import { getFormattedSeconds, getTimestamp } from '../../../../utils';

import useStyles from './stopwatch.styles';

const Stopwatch = ({ activeTimer, resetTimer, addStopwatchLap, clearStopwatchLaps, clock, laps, ...props }) => {
  const classes = useStyles();
  const [noOfVisibleLaps, changeNoOfVisibleLaps] = useState(10);
  const active = activeTimer === 'stopwatch';
  const formattedElapsedTime = clock ? getFormattedSeconds(clock) : '00:00:00';

  const handleStartStopClick = () => {
    const { setActiveTimer, startTimer, stopTimer, intervalID, increaseTimer } = props;

    if (activeTimer === 'stopwatch') {
      setActiveTimer(null);
      clearInterval(intervalID);
      stopTimer();
    } else {
      const timestamp = getTimestamp();
      const interval = setInterval(() => increaseTimer(), 1000);
      setActiveTimer('stopwatch');
      startTimer(timestamp, interval);
    }
  };

  return (
    <Container maxWidth="md">

      <Section>
        <Typography variant="body1">
          A clock that can be started and stopped in order to measure the exact time of an event,
          especially a sports event.
        </Typography>
      </Section>

      <Section title="Stopwatch">
        <Typography variant="h2" align="center">
          {formattedElapsedTime}
        </Typography>
        <Grid spacing={2} justify="center" alignItems="center" className={classes.buttonContainer} container>
          <Grid xs="auto" item>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={handleStartStopClick}
            >
              {active ? (
                <>
                  Stop
                  <StopIcon />
                </>
              ) : (
                <>
                  Start
                  <PlayIcon />
                </>
              )}
            </Button>
          </Grid>
          <Grid xs="auto" item>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={resetTimer}
              disabled={clock === 0 || active}
            >
              Reset
              <ResetIcon />
            </Button>
          </Grid>
          <Grid xs="auto" item>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => addStopwatchLap(clock)}
              disabled={!active}
            >
              Lap
              <LapIcon />
            </Button>
          </Grid>
        </Grid>
      </Section>

      <Section title="Laps">
        <Grid spacing={0} justify="flex-end" alignItems="flex-start" container>
          <Grid xs="auto" item>
            <LapsActionsMenu noOfVisibleLaps={noOfVisibleLaps} changeNoOfVisibleLaps={changeNoOfVisibleLaps} />
          </Grid>
          <Grid xs={12} item>
            {laps.length ? (
              <LapsList laps={laps} noOfVisibleLaps={noOfVisibleLaps} />
            ) : (
              <Typography variant="body1" align="center">
                There is no registered lap yet...
              </Typography>
            )}
          </Grid>
        </Grid>
      </Section>

    </Container>
  );
};

Stopwatch.propTypes = {
  activeTimer: PropTypes.string,
  intervalID: PropTypes.number,
  clock: PropTypes.number.isRequired,
  laps: PropTypes.arrayOf(PropTypes.number),
  setActiveTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  increaseTimer: PropTypes.func.isRequired,
  addStopwatchLap: PropTypes.func.isRequired,
  clearStopwatchLaps: PropTypes.func.isRequired,
};

Stopwatch.defaultProps = {
  activeTimer: null,
  intervalID: null,
  laps: [],
};

export default Stopwatch;
