import React from 'react';

import Typography from '@material-ui/core/Typography';

import useStyles from './project-title.styles';

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
