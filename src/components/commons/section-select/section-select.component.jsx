import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

import CheckedIcon from '@material-ui/icons/RadioButtonChecked';
import UncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import useStyles from './section-select.styles';

const SectionSelect = ({ selectedByDefault, onSelect, title, gutterBottom, options, breakpoints: { xs, sm, md, lg } }) => {
  const classes = useStyles();
  const [selected, updateSelected] = useState(null);
  const gridClassNames = clsx({
    [classes.marginTop]: !title,
    [classes.marginBottom]: gutterBottom,
  });

  const handleCardClick = key => {
    updateSelected(key);
    onSelect(key);
  };

  useEffect(() => {
    if (selectedByDefault) updateSelected(selectedByDefault);
  }, [selectedByDefault]);

  return (
    <>
      {title && (
        <Typography variant="subtitle1" className={classes.marginTop}>
          {title}
        </Typography>
      )}
      <Grid className={gridClassNames} spacing={3} container>
        {options.map(option => (
          <Grid key={option.key} xs={xs} sm={sm} md={md} lg={lg} item>
            <Card className={classes.card}>
              <CardActionArea onClick={() => handleCardClick(option.key)} disableRipple>
                <CardContent>
                  <Box className={classes.header}>
                    {selected === option.key ? (
                      <CheckedIcon color="primary" className={classes.icon} />
                    ) : (
                      <UncheckedIcon className={classes.icon} />
                    )}
                    <Typography className={classes.title} variant="h5" component="p" gutterBottom>
                      {option.title}
                    </Typography>
                  </Box>
                  {option.description && (
                    <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                      {option.description}
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

SectionSelect.propTypes = {
  title: PropTypes.string,
  gutterBottom: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedByDefault: PropTypes.string,
  breakpoints: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
  }),
};

SectionSelect.defaultProps = {
  title: '',
  gutterBottom: false,
  selectedByDefault: null,
  breakpoints: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
  },
};

export default SectionSelect;
