import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';

import useStyles from '../stopwatch.styles';
import { getFormattedSeconds } from '../../../../../utils';

const LapsList = ({ laps, noOfVisibleLaps }) => {
  const classes = useStyles();

  return [...laps].reverse().splice(0, noOfVisibleLaps).map((lap, index) => (
    <Typography key={Math.random() + lap} variant="body1" align="center">
      <Typography variant="body2" className={clsx(classes.lapText, classes.lapIndex)}>
        {`${laps.length - index}.`}
      </Typography>
      <Typography variant="body2" className={classes.lapText}>
        {getFormattedSeconds(lap)}
      </Typography>
    </Typography>
  ));
};

LapsList.proptypes = {
  laps: PropTypes.arrayOf(PropTypes.number).isRequired,
  noOfVisibleLaps: PropTypes.number.isRequired
};

export default LapsList;
