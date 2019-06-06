import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

import LeftIcon from '@material-ui/icons/ChevronLeft';
import RightIcon from '@material-ui/icons/ChevronRight';

import {
  CONTROL_DEFAULTS,
  CONTROL_TYPES,
  BUTTON_POSITIONS,
  ERROR_TEXTS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  BUTTON_COLORS
} from './form.constants';

import styles from './form.styles';

class Form extends React.PureComponent {
  static propTypes = {
    controls: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      type: PropTypes.oneOf(Object.values(CONTROL_TYPES)).isRequired,
      defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]).isRequired,
      label: PropTypes.string,
      required: PropTypes.bool,
      disabled: PropTypes.bool,
      autocomplete: PropTypes.string,
      helperText: PropTypes.string,
      errorTexts: PropTypes.arrayOf(PropTypes.string),
      validators: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])),
      inline: PropTypes.bool,
      indicator: PropTypes.bool,
      buttons: PropTypes.bool,
      gutterRight: PropTypes.bool,
      min: PropTypes.number,
      max: PropTypes.number,
      step: PropTypes.number,
      rows: PropTypes.number,
      options: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired
        })),
        PropTypes.arrayOf(PropTypes.string)
      ])
    })).isRequired,
    buttonPosition: PropTypes.oneOf(Object.values(BUTTON_POSITIONS)),
    buttonFloated: PropTypes.bool,
    buttonFullWidth: PropTypes.bool,
    buttonSize: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
    submitIcon: PropTypes.object,
    submitFunction: PropTypes.func.isRequired,
    submitLabel: PropTypes.string,
    submitDisabled: PropTypes.bool,
    submitVariant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
    submitColor: PropTypes.oneOf(Object.values(BUTTON_COLORS)),
    secondaryIcon: PropTypes.object,
    secondaryFunction: PropTypes.func,
    secondaryLabel: PropTypes.string,
    secondaryDisabled: PropTypes.bool,
    secondaryVariant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
    secondaryColor: PropTypes.oneOf(Object.values(BUTTON_COLORS))
  };

  static defaultProps = {
    buttonPosition: BUTTON_POSITIONS.CENTER,
    buttonFloated: false,
    buttonFullWidth: false,
    buttonSize: 'medium',
    submitIcon: null,
    submitLabel: 'Submit',
    submitDisabled: false,
    submitVariant: BUTTON_VARIANTS.CONTAINED,
    submitColor: BUTTON_COLORS.PRIMARY,
    secondaryIcon: null,
    secondaryFunction: null,
    secondaryLabel: 'Cancel',
    secondaryDisabled: false,
    secondaryVariant: BUTTON_VARIANTS.CONTAINED,
    secondaryColor: BUTTON_COLORS.PRIMARY,
  };

  constructor(props) {
    super(props);

    this.state = {
      ...props.controls.reduce((o, { key, defaultValue }) => ({
        ...o,
        [key]: {
          value: defaultValue,
          error: null
        }
      }), {})
    };
  }

  getControlState = key => {
    const { [key]: control } = this.state;

    return control;
  };

  getInvalidValidatorIndex = (value, validators) => {
    const invalidIndex = validators.findIndex(validator => (
      (typeof validator === 'function' && !validator(value))
      || (typeof validator === 'object' && !validator.test(value))
    ));

    if (invalidIndex !== -1) return invalidIndex;
    return null;
  };

  validateControl = ({ key, required, validators, errorTexts }) => {
    const { value } = this.getControlState(key);

    if (required && !value) return ERROR_TEXTS.REQUIRED;
    if (validators) {
      const invalidValidatorIndex = this.getInvalidValidatorIndex(value, validators);
      return invalidValidatorIndex !== null ? errorTexts[invalidValidatorIndex] : null;
    }
    return null;
  };

  validateForm = () => {
    const { controls } = this.props;

    controls.forEach(control => {
      const validationError = this.validateControl(control);

      this.setState(state => ({
        [control.key]: {
          ...state[control.key],
          error: validationError
        }
      }));
    });

    return controls.every(control => this.getControlState(control.key).error === null);
  };

  handleChange = (key, value) => this.setState({ [key]: { value, error: null } });

  handleIncreaseClick = ({ key, max }) => {
    const { value } = this.getControlState(key);
    const nextValue = value + 1;

    this.setState({
      [key]: {
        value: nextValue <= (max || CONTROL_DEFAULTS.SLIDER_MAX) ? nextValue : value,
        error: null
      }
    });
  };

  handleDecreaseClick = ({ key, min }) => {
    const { value } = this.getControlState(key);
    const nextValue = value - 1;

    this.setState({
      [key]: {
        value: nextValue >= (min || CONTROL_DEFAULTS.SLIDER_MIN) ? nextValue : value,
        error: null
      }
    });
  };

  handleSubmit = e => {
    const { submitFunction, controls } = this.props;

    e.preventDefault();
    e.stopPropagation();

    const isFormValid = this.validateForm();
    if (isFormValid) submitFunction(controls.reduce((acc, { key }) => ({ ...acc, [key]: this.getControlState(key).value }), {}));
  };

  getFormControlProps = ({ key, disabled, required, inline }) => {
    const { classes } = this.props;
    const { error } = this.getControlState(key);

    return {
      key,
      error: !!error,
      disabled: disabled || CONTROL_DEFAULTS.DISABLED,
      required: required || CONTROL_DEFAULTS.REQUIRED,
      className: clsx(
        { [classes.inline]: inline },
        classes.formControl
      ),
      fullWidth: true
    };
  };

  renderFormHelperText = ({ key, helperText }) => (
    <FormHelperText id={`${key}-helper-text`}>{this.getControlState(key).error || helperText}</FormHelperText>
  );

  renderInputLabel = ({ key, label }) => {
    const { classes } = this.props;

    return (
      <InputLabel htmlFor={key} className={classes.inputLabel}>
        {label}
      </InputLabel>
    );
  };

  renderNumberControl = control => (
    <FormControl {...this.getFormControlProps(control)}>
      {this.renderInputLabel(control)}
      <Input
        id={control.key}
        type={control.type}
        value={+this.getControlState(control.key).value}
        onChange={e => this.handleChange(control.key, +e.target.value)}
        autoComplete={control.autocomplete || CONTROL_DEFAULTS.AUTOCOMPLETE}
        autoFocus={false}
        inputProps={{
          min: control.min || CONTROL_DEFAULTS.NUMBER_MIN,
          max: control.max || CONTROL_DEFAULTS.NUMBER_MAX,
          step: control.step || CONTROL_DEFAULTS.NUMBER_STEP
        }}
        aria-describedby={`${control.key}-helper-text`}
      />
      {this.renderFormHelperText(control)}
    </FormControl>
  );

  renderTextControl = control => (
    <FormControl {...this.getFormControlProps(control)}>
      {this.renderInputLabel(control)}
      <Input
        id={control.key}
        type={control.type}
        value={this.getControlState(control.key).value}
        onChange={e => this.handleChange(control.key, e.target.value)}
        autoComplete={control.autocomplete || CONTROL_DEFAULTS.AUTOCOMPLETE}
        autoFocus={false}
        aria-describedby={`${control.key}-helper-text`}
      />
      {this.renderFormHelperText(control)}
    </FormControl>
  );

  renderTextareaControl = control => (
    <FormControl {...this.getFormControlProps(control)}>
      {this.renderInputLabel(control)}
      <Input
        id={control.key}
        value={this.getControlState(control.key).value}
        onChange={e => this.handleChange(control.key, e.target.value)}
        autoComplete={control.autocomplete || CONTROL_DEFAULTS.AUTOCOMPLETE}
        autoFocus={false}
        aria-describedby={`${control.key}-helper-text`}
        rows={control.rows || CONTROL_DEFAULTS.TEXTAREA_ROWS}
        multiline
      />
      {this.renderFormHelperText(control)}
    </FormControl>
  );

  renderSelectControl = control => (
    <FormControl {...this.getFormControlProps(control)}>
      {this.renderInputLabel(control)}
      <Select
        id={control.key}
        value={this.getControlState(control.key).value}
        onChange={e => this.handleChange(control.key, e.target.value)}
        autoComplete={control.autocomplete || CONTROL_DEFAULTS.AUTOCOMPLETE}
        autoFocus={false}
        aria-describedby={`${control.key}-helper-text`}
      >
        {control.options && control.options.map(option => (
          <MenuItem key={option.value || option} value={option.value || option}>
            {option.label || option}
          </MenuItem>
        ))}
      </Select>
      {this.renderFormHelperText(control)}
    </FormControl>
  );

  renderSliderControl = control => {
    const { classes } = this.props;
    const className = clsx(
      { [classes.inline]: control.inline },
      classes.sliderControl
    );
    const sliderClasses = {
      thumb: classes.thumb,
      focused: classes.focused,
      activated: classes.activated,
      jumped: classes.jumped
    };
    const thumb = (
      <Typography className={classes.thumbText}>
        {this.getControlState(control.key).value}
      </Typography>
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
              onClick={() => this.handleDecreaseClick(control)}
            >
              <LeftIcon />
            </IconButton>
          )}
          <Slider
            value={this.getControlState(control.key).value}
            aria-labelledby={`${control.key}-label`}
            className={classes.slider}
            onChange={(e, value) => this.handleChange(control.key, value)}
            min={control.min || CONTROL_DEFAULTS.SLIDER_MIN}
            max={control.max || CONTROL_DEFAULTS.SLIDER_MAX}
            step={control.step || CONTROL_DEFAULTS.SLIDER_STEP}
            classes={control.indicator ? sliderClasses : {}}
            {...control.indicator ? { thumb } : {}}
          />
          {control.buttons && (
            <IconButton
              size="small"
              className={classes.sliderButton}
              onClick={() => this.handleIncreaseClick(control)}
            >
              <RightIcon />
            </IconButton>
          )}
        </div>
      </div>
    );
  };

  renderButtons = () => {
    const {
      classes,
      buttonPosition,
      buttonFloated,
      buttonFullWidth,
      buttonSize,
      submitIcon: SubmitIcon,
      submitLabel,
      submitDisabled,
      submitVariant,
      submitColor,
      secondaryIcon: SecondaryIcon,
      secondaryLabel,
      secondaryDisabled,
      secondaryVariant,
      secondaryColor,
      secondaryFunction
    } = this.props;

    const wrapperClasses = clsx(
      {
        [classes.floated]: buttonFloated,
        [classes[buttonSize]]: buttonFloated,
        [classes[buttonPosition]]: Object.values(BUTTON_POSITIONS).includes(buttonPosition)
      },
      classes.buttonWrapper
    );

    return (
      <div className={wrapperClasses}>
        {secondaryFunction && (
          <Button
            variant={secondaryVariant}
            fullWidth={buttonFullWidth}
            className={classes.secondaryButton}
            onClick={() => secondaryFunction()}
            color={secondaryColor}
            disabled={secondaryDisabled}
            size={buttonSize}
            aria-label={secondaryLabel}
          >
            {secondaryLabel}
            {SecondaryIcon && <SecondaryIcon className={classes.buttonIcon} />}
          </Button>
        )}
        <Button
          type="submit"
          variant={submitVariant}
          fullWidth={buttonFullWidth}
          color={submitColor}
          disabled={submitDisabled}
          size={buttonSize}
          aria-label={submitLabel}
        >
          {submitLabel}
          {SubmitIcon && <SubmitIcon className={classes.buttonIcon} />}
        </Button>
      </div>
    );
  };

  render() {
    const { controls, classes } = this.props;

    const formControls = controls.reduce((acc, control) => {
      if (control.type === CONTROL_TYPES.PASSWORD) return [...acc, this.renderTextControl(control)];
      if (control.type === CONTROL_TYPES.TEXT) return [...acc, this.renderTextControl(control)];
      if (control.type === CONTROL_TYPES.TEXTAREA) return [...acc, this.renderTextareaControl(control)];
      if (control.type === CONTROL_TYPES.NUMBER) return [...acc, this.renderNumberControl(control)];
      if (control.type === CONTROL_TYPES.SELECT) return [...acc, this.renderSelectControl(control)];
      if (control.type === CONTROL_TYPES.SLIDER) return [...acc, this.renderSliderControl(control)];
      return acc;
    }, []);

    const buttons = this.renderButtons();

    return (
      <form onSubmit={this.handleSubmit} className={classes.form} noValidate>
        {formControls}
        {buttons}
      </form>
    );
  }
}

export default withStyles(styles)(Form);
