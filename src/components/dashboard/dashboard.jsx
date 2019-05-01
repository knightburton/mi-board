import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Dashboard extends React.PureComponent {
  render() {
    return (
      <Container fluid>
        <Row className="text-center">
          <Col>
            <h1>Dashboard</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
