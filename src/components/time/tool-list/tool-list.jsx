import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkContainer } from 'react-router-bootstrap';

import { tools } from '../constants';

export default class ToolList extends React.PureComponent {
  render() {
    return (
      <Container fluid>
        <Row>
          {tools.map(tool => (
            <Col key={tool.id} xs={12} sm={4} md={3}>
              <LinkContainer to={tool.link}>
                <Card className="text-center h-100 cursor-pointer cursor-hover">
                  <Card.Header className="display-4">
                    <FontAwesomeIcon icon={tool.icon} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>{tool.title}</Card.Title>
                    <Card.Text>
                      {tool.text.replace(/\s+/g,' ').trim()}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </LinkContainer>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
