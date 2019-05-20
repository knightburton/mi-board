import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  textBold: {
    fontWeight: 'bold'
  },
  textLight: {
    fontWeight: 'light'
  }
});

const ProjectTitle = () => {
  const classes = useStyles();

  return (
    <Typography variant="h6" component="h6" align="center">
      <Typography variant="body1" component="span" className={classes.textBold}>MI-B</Typography>
      <Typography variant="body1" component="span" className={classes.textLight}>oard</Typography>
    </Typography>
  );
};

export default ProjectTitle;
