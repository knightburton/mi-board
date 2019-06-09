import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import ControlText from './controls/control-text.component';
import ControlTextarea from './controls/control-textarea.component';
import ControlNumber from './controls/control-number.component';
import ControlSelect from './controls/control-select.component';
import ControlSlider from './controls/control-slider.component';
import ControlDate from './controls/control-date.component';

import {
  CONTROL_DEFAULTS,
  CONTROL_TYPES,
  ERROR_TEXTS,
  BUTTON_POSITIONS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  BUTTON_COLORS,
  VALIDATORS
} from './form.constants';

import { controlPropTypes } from './controls/control.proptypes';
import styles from './form.styles';

class Form extends React.PureComponent {
  static propTypes = {
    controls: PropTypes.arrayOf(controlPropTypes).isRequired,
    allowControlsChange: PropTypes.bool,
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
    allowControlsChange: false,
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
      ...this.getDefaultControlValuesFrom(props.controls)
    };
  }

  componentWillReceiveProps(nextProps) {
    const { allowControlsChange, controls } = this.props;

    if (allowControlsChange && controls !== nextProps.controls) this.setState({ ...this.getDefaultControlValuesFrom(nextProps.controls) });
  }

  getDefaultControlValuesFrom = controls => controls.reduce((o, { key, defaultValue }) => ({
    ...o,
    [key]: {
      value: defaultValue,
      error: null
    }
  }), {});

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

    if (required && !VALIDATORS.REQUIRED.test(value)) return ERROR_TEXTS.REQUIRED;
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
      const props = {
        key: control.key,
        control,
        state: this.getControlState(control.key),
        onChange: this.handleChange
      };

      if (control.type === CONTROL_TYPES.PASSWORD) return [...acc, <ControlText {...props} />];
      if (control.type === CONTROL_TYPES.TEXT) return [...acc, <ControlText {...props} />];
      if (control.type === CONTROL_TYPES.TEXTAREA) return [...acc, <ControlTextarea {...props} />];
      if (control.type === CONTROL_TYPES.NUMBER) return [...acc, <ControlNumber {...props} />];
      if (control.type === CONTROL_TYPES.SELECT) return [...acc, <ControlSelect {...props} />];
      if (control.type === CONTROL_TYPES.SLIDER) {
        return [...acc, <ControlSlider {...props} onDecrease={this.handleDecreaseClick} onIncrease={this.handleIncreaseClick} />];
      }
      if (control.type === CONTROL_TYPES.DATE) return [...acc, <ControlDate {...props} />];
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
