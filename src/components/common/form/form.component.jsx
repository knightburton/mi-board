import React, { Fragment } from 'react';
import Forma from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';

import { FORM_TYPES, CONTROL_DEFAULTS, CONTROL_TYPES } from './form.constants';

export default class Form extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ...props.controls.reduce((o, { key, defaultValue }) => ({
        ...o,
        [key]: {
          value: defaultValue,
          isValid: false,
          isInvalid: false
        }
      }), {})
    };
  }

  getExtraControlProps = control => {
    const { showPlaceholders, smallControls } = this.props;

    return {
      size: smallControls ? 'sm' : null,
      placeholder: showPlaceholders ? control.placeholder : null
    };
  };

  handleChange = (key, value) => this.setState({
    [key]: {
      value,
      isValid: false,
      isInvalid: false
    }
  });

  renderLabel = ({ label, required }) => label ? <Forma.Label className="mb-1 text-muted">{label}{required && ' *'}</Forma.Label> : null;

  renderFeedback = ({ validFeedback, invalidFeedback }) => (
    <Fragment>
      {validFeedback &&
        <Forma.Control.Feedback type="valid">{validFeedback}</Forma.Control.Feedback>
      }
      {invalidFeedback &&
        <Forma.Control.Feedback type="invalid">{invalidFeedback}</Forma.Control.Feedback>
      }
    </Fragment>
  );

  renderNumberControl = control => (
    <Forma.Group key={control.key} controlId={control.key}>
      {this.renderLabel(control)}
      <Forma.Control
        type={control.type}
        size={this.props.smallControls ? 'sm' : null}
        value={this.state[control.key].value}
        isValid={this.state[control.key].isValid}
        isInvalid={this.state[control.key].isInvalid}
        onChange={e => this.handleChange(control.key, e.target.value)}
        autoComplete="off"
        disabled={control.disabled || CONTROL_DEFAULTS.DISABLED}
        required={control.required || CONTROL_DEFAULTS.REQUIRED}
        min={control.min || CONTROL_DEFAULTS.NUMBER_MIN}
        max={control.max || CONTROL_DEFAULTS.NUMBER_MAX}
        step={control.step || CONTROL_DEFAULTS.NUMBER_STEP}
      />
      {this.renderFeedback(control)}
    </Forma.Group>
  );

  renderTextControl = control => (
    <Forma.Group key={control.key} controlId={control.key}>
      {this.renderLabel(control)}
      <Forma.Control
        type={control.type}
        size={this.props.smallControls ? 'sm' : null}
        value={this.state[control.key].value}
        isValid={this.state[control.key].isValid}
        isInvalid={this.state[control.key].isInvalid}
        onChange={e => this.handleChange(control.key, e.target.value)}
        autoComplete="off"
        disabled={control.disabled || CONTROL_DEFAULTS.DISABLED}
        required={control.required || CONTROL_DEFAULTS.REQUIRED}
      />
      {this.renderFeedback(control)}
    </Forma.Group>
  );

  renderTextareaControl = control => (
    <Forma.Group key={control.key} controlId={control.key}>
      {this.renderLabel(control)}
      <Forma.Control
        as={control.type}
        size={this.props.smallControls ? 'sm' : null}
        value={this.state[control.key].value}
        isValid={this.state[control.key].isValid}
        isInvalid={this.state[control.key].isInvalid}
        onChange={e => this.handleChange(control.key, e.target.value)}
        disabled={control.disabled || CONTROL_DEFAULTS.DISABLED}
        required={control.required || CONTROL_DEFAULTS.REQUIRED}
        rows={control.rows || CONTROL_DEFAULTS.TEXTAREA_ROWS}
      >
        {control.options && control.options.map(option => (
          <option key={option.value || option} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </Forma.Control>
      {this.renderFeedback(control)}
    </Forma.Group>
  );

  renderSelectControl = control => (
    <Forma.Group key={control.key} controlId={control.key}>
      {this.renderLabel(control)}
      <Forma.Control
        as={control.type}
        size={this.props.smallControls ? 'sm' : null}
        value={this.state[control.key].value}
        isValid={this.state[control.key].isValid}
        isInvalid={this.state[control.key].isInvalid}
        onChange={e => this.handleChange(control.key, e.target.value)}
        disabled={control.disabled || CONTROL_DEFAULTS.DISABLED}
        required={control.required || CONTROL_DEFAULTS.REQUIRED}
      >
        {control.options && control.options.map(option => (
          <option key={option.value || option} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </Forma.Control>
      {this.renderFeedback(control)}
    </Forma.Group>
  );

  renderRangeControl = control => (
    <Forma.Group key={control.key} controlId={control.key}>
      {this.renderLabel(control)}
      {control.indicator &&
        <span className="h5">
          <Badge variant="primary" className="ml-2">
            {this.state[control.key].value}
          </Badge>
        </span>
      }
      <Forma.Control
        type={control.type}
        size={this.props.smallControls ? 'sm' : null}
        value={this.state[control.key].value}
        isValid={this.state[control.key].isValid}
        isInvalid={this.state[control.key].isInvalid}
        onChange={e => this.handleChange(control.key, e.target.value)}
        disabled={control.disabled || CONTROL_DEFAULTS.DISABLED}
        required={control.required || CONTROL_DEFAULTS.REQUIRED}
        min={control.min || CONTROL_DEFAULTS.RANGE_MIN}
        max={control.max || CONTROL_DEFAULTS.RANGE_MAX}
        step={control.step || CONTROL_DEFAULTS.RANGE_STEP}
        className="custom-range shadow-none"
      />
      {this.renderFeedback(control)}
    </Forma.Group>
  );

  render() {
    const { type, modalTitle, controls } = this.props;

    const inputs = controls.reduce((acc, control) => {
      if (control.type === CONTROL_TYPES.PASSWORD) return [...acc, this.renderTextControl(control)];
      if (control.type === CONTROL_TYPES.TEXT) return [...acc, this.renderTextControl(control)];
      if (control.type === CONTROL_TYPES.TEXTAREA) return [...acc, this.renderTextareaControl(control)];
      if (control.type === CONTROL_TYPES.NUMBER) return [...acc, this.renderNumberControl(control)];
      if (control.type === CONTROL_TYPES.SELECT) return [...acc, this.renderSelectControl(control)];
      if (control.type === CONTROL_TYPES.RANGE) return [...acc, this.renderRangeControl(control)];
      return acc;
    }, []);

    return type === FORM_TYPES.MODAL ? (
      <Modal show={true} size="lg" backdrop="static" backdropClassName="zi-10" className="zi-11" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    ) : (
      <Forma>
        {inputs}
      </Forma>
    );
  }
}
