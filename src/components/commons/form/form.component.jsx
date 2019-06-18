import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ControlText from './controls/control-text.component';
import ControlTextarea from './controls/control-textarea.component';
import ControlNumber from './controls/control-number.component';
import ControlSelect from './controls/control-select.component';
import ControlSlider from './controls/control-slider.component';
import ControlDate from './controls/control-date.component';
import ControlFile from './controls/control-file.component';
import ButtonsDefault from './buttons/buttons-default.component';
import ButtonsSingle from './buttons/buttons-single.component';
import FormSingleValue from '../form-single-value/form-single-value.component';

import {
  CONTROL_DEFAULTS,
  CONTROL_TYPES,
  ERROR_TEXTS,
  VALIDATORS
} from './form.constants';

import { controlPropTypes } from './controls/control.proptypes';
import { buttonsPropTypes, buttonsDefaultProps } from './buttons/buttons.proptypes';
import styles from './form.styles';

class Form extends React.PureComponent {
  static propTypes = {
    controls: PropTypes.arrayOf(controlPropTypes).isRequired,
    single: PropTypes.bool,
    allowControlsChange: PropTypes.bool,
    ...buttonsPropTypes
  };

  static defaultProps = {
    single: false,
    allowControlsChange: false,
    ...buttonsDefaultProps
  };

  constructor(props) {
    super(props);

    this.state = {
      singleEdit: false,
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

  getControlDisplayValue = key => {
    const { controls } = this.props;
    const { [key]: control } = this.state;

    if (!control) return null;
    return controls[0].type === CONTROL_TYPES.FILE && control.value.length
      ? control.value[0].name || controls[0].defaultValue
      : control.value;
  };

  getInvalidValidatorIndex = (value, validators) => {
    const invalidIndex = validators.findIndex(validator => (
      (typeof validator === 'function' && !validator(value))
      || (typeof validator === 'object' && !validator.test(value))
    ));

    if (invalidIndex !== -1) return invalidIndex;
    return null;
  };

  getIsFormValid = () => {
    const { controls } = this.props;

    return controls.every(control => this.validateControl(control) === null);
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
    const { submitFunction, controls, single } = this.props;
    const { singleEdit } = this.state;

    e.preventDefault();
    e.stopPropagation();

    const isFormValid = this.getIsFormValid();
    if (isFormValid) {
      if (single && singleEdit) this.setState({ singleEdit: false });
      return submitFunction(controls.reduce((acc, { key }) => ({ ...acc, [key]: this.getControlState(key).value }), {}));
    }
    return this.validateForm();
  };

  handleSingleEditEnable = () => this.setState({ singleEdit: true });

  handleSingleEditDisable = () => {
    const { controls } = this.props;

    this.setState({
      singleEdit: false,
      ...this.getDefaultControlValuesFrom(controls)
    });
  };

  collectFormControls = () => {
    const { controls } = this.props;

    return controls.reduce((acc, control) => {
      const props = {
        key: control.key,
        control,
        state: this.getControlState(control.key),
        onChange: this.handleChange,
        ...control.type === CONTROL_TYPES.SLIDER
          ? { onDecrease: this.handleDecreaseClick, onIncrease: this.handleIncreaseClick }
          : {}
      };

      if (control.type === CONTROL_TYPES.PASSWORD) return [...acc, <ControlText {...props} />];
      if (control.type === CONTROL_TYPES.TEXT) return [...acc, <ControlText {...props} />];
      if (control.type === CONTROL_TYPES.TEXTAREA) return [...acc, <ControlTextarea {...props} />];
      if (control.type === CONTROL_TYPES.NUMBER) return [...acc, <ControlNumber {...props} />];
      if (control.type === CONTROL_TYPES.SELECT) return [...acc, <ControlSelect {...props} />];
      if (control.type === CONTROL_TYPES.SLIDER) return [...acc, <ControlSlider {...props} />];
      if (control.type === CONTROL_TYPES.DATE) return [...acc, <ControlDate {...props} />];
      if (control.type === CONTROL_TYPES.FILE) return [...acc, <ControlFile {...props} />];
      return acc;
    }, []);
  };

  render() {
    const { controls, single, classes, ...restProps } = this.props;
    const { secondaryIcon, secondaryFunction, secondaryDisabled, secondaryColor } = restProps;
    const { singleEdit } = this.state;

    return single ? (
      <form onSubmit={e => this.handleSubmit(e)} className={classes.single} noValidate>
        {singleEdit
          ? this.collectFormControls()
          : (
            <FormSingleValue
              label={controls.length && controls[0].label}
              value={controls.length && this.getControlDisplayValue(controls[0].key)}
            />
          )
        }
        <ButtonsSingle
          edit={singleEdit}
          onEditEnable={() => this.handleSingleEditEnable()}
          onEditDisable={() => this.handleSingleEditDisable()}
          secondaryFunction={secondaryFunction}
          secondaryIcon={secondaryIcon}
          secondaryDisabled={secondaryDisabled}
          secondaryColor={secondaryColor}
        />
      </form>
    ) : (
      <form onSubmit={e => this.handleSubmit(e)} className={classes.form} noValidate>
        {this.collectFormControls()}
        <ButtonsDefault {...restProps} />
      </form>
    );
  }
}

export default withStyles(styles)(Form);
