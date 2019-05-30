import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { CONTROL_DEFAULTS, CONTROL_TYPES, BUTTON_POSITIONS, ERROR_TEXTS } from './form.constants';

const styles = theme => ({
  form: {
    position: 'relative',
    padding: theme.spacing(0, 2),
    textAlign: 'center'
  },
  formControl: {
    marginBottom: theme.spacing(1.5)
  },
  left: {
    textAlign: 'left'
  },
  center: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  },
  buttonWrapper: {
    marginTop: theme.spacing(1)
  },
  floated: {
    position: 'absolute',
    width: `calc(100% - ${theme.spacing(4)}px)`
  },
  small: {
    bottom: -theme.spacing(5)
  },
  medium: {
    bottom: -theme.spacing(5)
  },
  large: {
    bottom: -theme.spacing(5.5)
  },
  secondaryButton: {
    marginRight: theme.spacing(2)
  },
  buttonIcon: {
    marginLeft: theme.spacing(1)
  }
});

class Form extends React.PureComponent {
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

  getInvalidValidatorIndex = (value, validators) => {
    for (const [index, validator] of validators.entries()) {
      if (typeof validator === 'function' && !validator(value)) return index;
      if (typeof validator === 'object' && !validator.test(value)) return index;
    }
    return null;
  };

  validateControl = ({ key, required, validators, errorTexts }) => {
    const value = this.state[key].value;

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

    return controls.every(control => this.state[control.key].error === null);
  };

  handleChange = (key, value) => this.setState({ [key]: { value, error: null } });

  handleSubmit = e => {
    const { submitFunction, controls } = this.props;

    e.preventDefault();
    e.stopPropagation();

    const isFormValid = this.validateForm();
    if (isFormValid) return submitFunction(controls.reduce((acc, { key }) => ({ ...acc, [key]: this.state[key].value }), {}));
  };

  renderFormHelperText = ({ key, helperText }) => (
    <FormHelperText id={`${key}-helper-text`}>{this.state[key].error || helperText}</FormHelperText>
  );

  renderNumberControl = control => (
    <FormControl
      key={control.key}
      error={!!this.state[control.key].error}
      disabled={control.disabled || CONTROL_DEFAULTS.DISABLED}
      required={control.required || CONTROL_DEFAULTS.REQUIRED}
      className={this.props.classes.formControl}
      fullWidth
    >
      <InputLabel htmlFor={control.key}>{control.label}</InputLabel>
      <Input
        id={control.key}
        type={control.type}
        value={this.state[control.key].value}
        onChange={e => this.handleChange(control.key, e.target.value)}
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
    <FormControl
      key={control.key}
      error={!!this.state[control.key].error}
      disabled={control.disabled || CONTROL_DEFAULTS.DISABLED}
      required={control.required || CONTROL_DEFAULTS.REQUIRED}
      className={this.props.classes.formControl}
      fullWidth
    >
      <InputLabel htmlFor={control.key}>{control.label}</InputLabel>
      <Input
        id={control.key}
        type={control.type}
        value={this.state[control.key].value}
        onChange={e => this.handleChange(control.key, e.target.value)}
        autoComplete={control.autocomplete || CONTROL_DEFAULTS.AUTOCOMPLETE}
        autoFocus={false}
        aria-describedby={`${control.key}-helper-text`}
      />
      {this.renderFormHelperText(control)}
    </FormControl>
  );

  renderTextareaControl = control => (
    <FormControl
      key={control.key}
      error={!!this.state[control.key].error}
      disabled={control.disabled || CONTROL_DEFAULTS.DISABLED}
      required={control.required || CONTROL_DEFAULTS.REQUIRED}
      className={this.props.classes.formControl}
      fullWidth
    >
      <InputLabel htmlFor={control.key}>{control.label}</InputLabel>
      <Input
        id={control.key}
        value={this.state[control.key].value}
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
    <FormControl
      key={control.key}
      error={!!this.state[control.key].error}
      disabled={control.disabled || CONTROL_DEFAULTS.DISABLED}
      required={control.required || CONTROL_DEFAULTS.REQUIRED}
      className={this.props.classes.formControl}
      fullWidth
    >
      <InputLabel htmlFor={control.key}>{control.label}</InputLabel>
      <Select
        id={control.key}
        value={this.state[control.key].value}
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

  renderButtons = () => {
    const {
      classes,
      buttonPosition,
      buttonFloated,
      buttonFullWitdth,
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
        {secondaryFunction &&
          <Button
            variant={secondaryVariant}
            fullWidth={buttonFullWitdth}
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
        }
        <Button
          type="submit"
          variant={submitVariant}
          fullWidth={buttonFullWitdth}
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
