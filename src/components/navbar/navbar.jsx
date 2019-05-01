import React from 'react';
import Bar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { withRouter, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends React.PureComponent {
  render() {
    const { logout } = this.props;

    return (
      <Bar bg="dark" variant="dark" expand="lg" className="px-3 py-0">
        <Bar.Brand>MI</Bar.Brand>
        <Bar.Toggle aria-controls="mi-board-navbar-nav" />
        <Bar.Collapse id="mi-board-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-link" exact>Dashboard</NavLink>
          </Nav>
          <Nav>
            <NavDropdown title={<FontAwesomeIcon icon={['far', 'user']} />} id="mi-board-nav-dropdown">
              <NavDropdown.Item>
                <FontAwesomeIcon icon="address-card" />
                <span className="ml-2">Details</span>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => logout()}>
                <FontAwesomeIcon icon="sign-out-alt" />
                <span className="ml-2">Logout</span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Bar.Collapse>
      </Bar>
    );
  }
}

export default withRouter(Navbar);
