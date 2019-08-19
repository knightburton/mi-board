import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Slider from '@material-ui/core/Slider';

import LeftIcon from '@material-ui/icons/ChevronLeft';
import RightIcon from '@material-ui/icons/ChevronRight';

import { controlPropTypes, statePropTypes } from './control.proptypes';

import { CONTROL_DEFAULTS } from '../form.constants';

import styles from './control.styles';

const useStyles = makeStyles(styles);

const ControlText = ({ control, state, onChange, onDecrease, onIncrease }) => {
  const classes = useStyles();
  const className = clsx(
    {
      [classes.inline]: control.inline,
      [classes.sliderFullWidth]: !control.inline
    },
    classes.sliderControl
  );

  return (
    <div key={control.key} className={className}>
      {control.label && (
        <Typography
          id={`${control.key}-label`}
          variant="caption"
          className={classes.sliderLabel}
        >
          {control.label}
        </Typography>
      )}
      <div className={classes.sliderContent}>
        {control.buttons && (
          <IconButton
            size="small"
            className={classes.sliderButton}
            onClick={() => onDecrease(control)}
          >
            <LeftIcon />
          </IconButton>
        )}
        <Slider
          value={state.value}
          aria-labelledby={`${control.key}-label`}
          onChange={(e, value) => onChange(control.key, value)}
          min={control.min || CONTROL_DEFAULTS.SLIDER_MIN}
          max={control.max || CONTROL_DEFAULTS.SLIDER_MAX}
          step={control.step || CONTROL_DEFAULTS.SLIDER_STEP}
          marks={control.marks || CONTROL_DEFAULTS.SLIDER_MARKS}
          valueLabelDisplay="auto"
        />
        {control.buttons && (
          <IconButton
            size="small"
            className={classes.sliderButton}
            onClick={() => onIncrease(control)}
          >
            <RightIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
};

ControlText.propTypes = {
  control: controlPropTypes.isRequired,
  state: statePropTypes.isRequired,
  onChange: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired
};

export default ControlText;
