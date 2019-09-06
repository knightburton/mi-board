import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Waiting from '../../components/widgets/waiting/waiting.component';

const ProtectedRoute = ({ authIsEmpty, authIsLoaded, disabledAfterSignIn, component, ...rest }) => {
  if (authIsLoaded) {
    if (disabledAfterSignIn && authIsEmpty) return <Route {...rest} component={component} />;
    if (!disabledAfterSignIn && !authIsEmpty) return <Route {...rest} component={component} />;
    if (disabledAfterSignIn && !authIsEmpty) return <Redirect to="/dashboard" />;
    if (!disabledAfterSignIn && authIsEmpty) return <Redirect to="/sign-in" />;
  }
  return <Waiting screen />;
};

ProtectedRoute.propTypes = {
  authIsEmpty: PropTypes.bool.isRequired,
  authIsLoaded: PropTypes.bool.isRequired,
  disabledAfterSignIn: PropTypes.bool,
  component: PropTypes.elementType.isRequired,
};

ProtectedRoute.defaultProps = {
  disabledAfterSignIn: false,
};

export default ProtectedRoute;
