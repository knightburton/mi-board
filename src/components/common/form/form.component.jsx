import React from 'react';
import BSForm from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { FORM_TYPES } from './form.constants';

export default class Form extends React.PureComponent {

  render() {
    const { type, modalTitle } = this.props;

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
      <BSForm>

      </BSForm>
    );
  }
}
