import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark">
          <Link className="navbar-brand text-danger" to="/">MI</Link>

          <ul className="nav navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/workout">Workout</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/calendar">Calendar</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/todos">Todos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
