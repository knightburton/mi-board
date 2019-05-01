import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Spinner from '../common/spinner/spinner';

export default class Login extends React.PureComponent {

  state = {
    email: '',
    password: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  isSubmitButtonDisabled = () => Object.keys(this.state).some(key => this.state[key].length === 0);

  handleSubmit = () => this.props.login(this.state);

  render() {
    const { email, password } = this.state;
    const { error, authInProgress } = this.props;

    return (
      <Container className="vh-100 bg-secondary" fluid>
        <Row className="h-100">
          <Col xs={12} className="my-auto text-center">
            <Row className="justify-content-center">
              <Col>
                <p className="text-uppercase font-weight-bold">MI</p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} sm={6} md={3} lg={2}>
                {!!error &&
                  <Alert variant="danger" className="mb-3">
                    {error}
                  </Alert>
                }
                <Form>
                  <Form.Group>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Email"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={this.handleChange}
                      disabled={authInProgress}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      size="sm"
                      type="password"
                      placeholder="Password"
                      name="password"
                      autoComplete="password"
                      value={password}
                      onChange={this.handleChange}
                      disabled={authInProgress}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => this.handleSubmit()}
                      disabled={this.isSubmitButtonDisabled()}
                    >
                      {authInProgress &&
                        <Spinner role="status" small />
                      }
                      <span className={authInProgress ? 'ml-2' : ''}>
                        Login
                      </span>
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
