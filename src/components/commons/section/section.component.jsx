import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Waiting from '../../widgets/waiting/waiting.component';

import useStyles from './section.styles';

const Section = ({ title, gutterBottom, children, waitingKey, isWaiting }) => {
  const classes = useStyles();
  const paperClassNames = clsx(
    {
      [classes.marginTop]: !title,
      [classes.marginBottom]: gutterBottom,
    },
    classes.paper
  );

  return (
    <>
      {title && (
        <Typography variant="subtitle1" className={classes.marginTop}>
          {title}
        </Typography>
      )}
      <Paper className={paperClassNames}>
        {children}
        {waitingKey && isWaiting && <Waiting progressbar />}
      </Paper>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  gutterBottom: PropTypes.bool,
  children: PropTypes.node.isRequired,
  waitingKey: PropTypes.string,
  isWaiting: PropTypes.bool,
};

Section.defaultProps = {
  title: '',
  gutterBottom: false,
  waitingKey: '',
  isWaiting: false,
};

export default Section;
