import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/header.component';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <div className="wrapper">
        <Header />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};
