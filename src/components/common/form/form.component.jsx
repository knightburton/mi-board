import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { CONTROL_DEFAULTS, CONTROL_TYPES } from './form.constants';

const styles = theme => ({
  form: {
    padding: theme.spacing(3, 2),
    textAlign: 'center'
  },
  formControl: {
    marginBottom: theme.spacing(1.5)
  },
  submitButton: {
    marginTop: theme.spacing(1)
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
          error: false
        }
      }), {})
    };
  }

  isFormValid = () => {
    const { controls } = this.props;

    return controls.every(control => this.isControlValid(control));
  };

  isControlValid = ({ key, required, validator }) => {
    const value = this.state[key].value;

    return required
      ? validator
        ? !!value && this.validateControl(validator, value)
        : !!value
      : validator
        ? this.validateControl(validator, value)
        : true
  };

  validateControl = (validator, value) => {
    if (typeof validator === 'function') return validator(value);
    return validator.test(value);
  };

  validateForm = () => {
    const { controls } = this.props;

    controls.forEach(control => {
      const isControlValid = this.isControlValid(control);

      this.setState(state => ({
        [control.key]: {
          ...state[control.key],
          error: !isControlValid
        }
      }));
    })
  };

  handleChange = (key, value) => this.setState({ [key]: { value, error: false } });

  handleSubmit = e => {
    const { submitFunction, controls } = this.props;

    e.preventDefault();
    e.stopPropagation();

    const isFormValid = this.isFormValid();
    if (isFormValid) return submitFunction(controls.reduce((acc, { key }) => ({ ...acc, [key]: this.state[key].value }), {}));
    this.validateForm();
  };

  renderFormHelperText = ({ key, helperText, errorText }) => (
    <FormHelperText id={`${key}-helper-text`}>{this.state[key].error ? errorText : helperText}</FormHelperText>
  );

  renderNumberControl = control => (
    <FormControl
      key={control.key}
      error={this.state[control.key].error}
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
      error={this.state[control.key].error}
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
      error={this.state[control.key].error}
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
      error={this.state[control.key].error}
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

  render() {
    const { controls, submitLabel, submitFullWith, submitDisabled, submitSize, classes } = this.props;

    const formControls = controls.reduce((acc, control) => {
      if (control.type === CONTROL_TYPES.PASSWORD) return [...acc, this.renderTextControl(control)];
      if (control.type === CONTROL_TYPES.TEXT) return [...acc, this.renderTextControl(control)];
      if (control.type === CONTROL_TYPES.TEXTAREA) return [...acc, this.renderTextareaControl(control)];
      if (control.type === CONTROL_TYPES.NUMBER) return [...acc, this.renderNumberControl(control)];
      if (control.type === CONTROL_TYPES.SELECT) return [...acc, this.renderSelectControl(control)];
      return acc;
    }, []);

    return (
      <form onSubmit={this.handleSubmit} className={classes.form} noValidate>
        {formControls}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth={submitFullWith}
          disabled={submitDisabled}
          size={submitSize}
          className={classes.submitButton}
        >
          {submitLabel}
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(Form);
