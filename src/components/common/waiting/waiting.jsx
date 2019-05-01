import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Spinner from '../spinner/spinner';

export default class Waiting extends React.PureComponent {
  render() {
    const { screen, show, label } = this.props;

    return screen ? (
      <Container className="vh-100 bg-secondary" fluid>
        <Row className="h-100">
          <Col xs={12} className="my-auto text-center">
            <Row className="justify-content-center">
              <Col>
                <Spinner variant="dark" grow />
                <span className="ml-2 h1 font-weight-light">{label}</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    ) : (
      <Modal
        show={show}
        size="sm"
        backdrop="static"
        className="d-block zi-14"
        backdropClassName="show zi-13"
        animation={false}
        centered
      >
        <Modal.Body className="text-center">
          <Spinner variant="dark" small />
          <span className="ml-2">{label}</span>
        </Modal.Body>
      </Modal>
    );
  }
}
