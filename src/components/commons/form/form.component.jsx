import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Controls from './controls/controls.component';
import ButtonsDefault from './buttons/buttons-default.component';
import ButtonsSingle from './buttons/buttons-single.component';
import FormSingleValue from '../form-single-value/form-single-value.component';

import { CONTROL_DEFAULTS } from './form.constants';

import * as helpers from './form.helpers';
import { controlPropTypes } from './controls/controls.proptypes';
import { buttonsPropTypes, buttonsDefaultProps } from './buttons/buttons.proptypes';
import useSyles from './form.styles';

const Form = ({
  controls,
  single,
  submitFunction,
  allowControlsChange,
  buttonPosition,
  buttonFloated,
  submitButton,
  secondaryButton,
}) => {
  const classes = useSyles();
  const [singleEdit, setSingleEdit] = useState(false);
  const [state, setState] = useState(helpers.getDefaultControlValuesFrom(controls));

  useEffect(() => {
    if (allowControlsChange) setState(helpers.getDefaultControlValuesFrom(controls));
  }, [allowControlsChange, controls]);

  const handleChange = (key, value) => setState({ ...state, [key]: { value, error: null } });
  const handleIncreaseClick = ({ key, max }) => {
    const { value } = helpers.getControlState(state, key);
    const nextValue = value + 1;

    setState({
      ...state,
      [key]: {
        value: nextValue <= (max || CONTROL_DEFAULTS.SLIDER_MAX) ? nextValue : value,
        error: null,
      },
    });
  };
  const handleDecreaseClick = ({ key, min }) => {
    const { value } = helpers.getControlState(state, key);
    const nextValue = value - 1;

    setState({
      ...state,
      [key]: {
        value: nextValue >= (min || CONTROL_DEFAULTS.SLIDER_MIN) ? nextValue : value,
        error: null,
      },
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    const isFormValid = helpers.getIsFormValid(controls, state);
    if (isFormValid) {
      if (single && singleEdit) setSingleEdit(false);
      return submitFunction(controls.reduce((acc, { key }) => ({ ...acc, [key]: helpers.getControlState(state, key).value }), {}));
    }
    return setState(helpers.validateForm(controls, state));
  };
  const handleSingleEditEnable = () => setSingleEdit(true);
  const handleSingleEditDisable = () => {
    setSingleEdit(false);
    setState(helpers.getDefaultControlValuesFrom(controls));
  };

  return single ? (
    <form onSubmit={handleSubmit} className={classes.single} noValidate>
      {singleEdit ? (
        <Controls
          controls={controls}
          state={state}
          onChange={handleChange}
          onIncrease={handleIncreaseClick}
          onDecrease={handleDecreaseClick}
        />
      ) : (
        <FormSingleValue
          label={controls.length && controls[0].label}
          value={controls.length && helpers.getControlDisplayValue(controls, state, controls[0].key)}
        />
      )}
      <ButtonsSingle
        edit={singleEdit}
        onEditEnable={handleSingleEditEnable}
        onEditDisable={handleSingleEditDisable}
        secondaryButton={secondaryButton}
      />
    </form>
  ) : (
    <form onSubmit={handleSubmit} className={classes.form} noValidate>
      <Controls
        controls={controls}
        state={state}
        onChange={handleChange}
        onIncrease={handleIncreaseClick}
        onDecrease={handleDecreaseClick}
      />
      <ButtonsDefault
        buttonPosition={buttonPosition}
        buttonFloated={buttonFloated}
        submitButton={submitButton}
        secondaryButton={secondaryButton}
      />
    </form>
  );
};

Form.propTypes = {
  controls: PropTypes.arrayOf(controlPropTypes).isRequired,
  submitFunction: PropTypes.func.isRequired,
  single: PropTypes.bool,
  allowControlsChange: PropTypes.bool,
  ...buttonsPropTypes,
  submitButton: PropTypes.node,
};

Form.defaultProps = {
  single: false,
  allowControlsChange: false,
  ...buttonsDefaultProps,
  submitButton: null,
};

export default Form;
