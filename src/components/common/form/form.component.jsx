import React, { Fragment } from 'react';
import Forma from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { FORM_TYPES, CONTROL_DEFAULTS, CONTROL_TYPES } from './form.constants';

export default class Form extends React.PureComponent {

  handleChange = (key, value) => this.setState({
    [key]: {
      value,
      isValid: false,
      isInvalid: false
    }
  });

  renderLabel = ({ label, required }) => (
    <Forma.Label className="mb-1 text-muted">{label}{required && ' *'}</Forma.Label>
  );

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
        size="sm"
        value={this.state[control.key].value}
        isValid={this.state[control.key].isValid}
        isInvalid={this.state[control.key].isInvalid}
        onChange={e => this.handleChange(control.key, e.target.value)}
        autocomplete="off"
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
    <Form.Group key={control.key} controlId={control.key}>
      {this.renderLabel(control)}
      <Form.Control
        type={control.type}
        size="sm"
        value={this.state[control.key].value}
        isValid={this.state[control.key].isValid}
        isInvalid={this.state[control.key].isInvalid}
        onChange={e => this.handleChange(control.key, e.target.value)}
        autocomplete="off"
        disabled={control.disabled || CONTROL_DEFAULTS.DISABLED}
        required={control.required || CONTROL_DEFAULTS.REQUIRED}
      />
      {this.renderFeedback(control)}
    </Form.Group>
  );

  renderTextareaControl = control => (
    <Form.Group key={control.key} controlId={control.key}>
      {this.renderLabel(control)}
      <Form.Control
        size="sm"
        as={control.type}
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
      </Form.Control>
      {this.renderFeedback(control)}
    </Form.Group>
  );

  renderSelectControl = control => (
    <Form.Group key={control.key} controlId={control.key}>
      {this.renderLabel(control)}
      <Form.Control
        size="sm"
        as={control.type}
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
      </Form.Control>
      {this.renderFeedback(control)}
    </Form.Group>
  );

  render() {
    const { type, modalTitle, controls } = this.props;

    const inputs = controls.reduce((acc, control) => {
      if (control.type === CONTROL_TYPES.PASSWORD) return [...acc, this.renderTextControl(control)];
      if (control.type === CONTROL_TYPES.TEXT) return [...acc, this.renderTextControl(control)];
      if (control.type === CONTROL_TYPES.TEXTAREA) return [...acc, this.renderTextareaControl(control)];
      if (control.type === CONTROL_TYPES.NUMBER) return [...acc, this.renderNumberControl(control)];
      if (control.type === CONTROL_TYPES.SELECT) return [...acc, this.renderSelectControl(control)];
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
