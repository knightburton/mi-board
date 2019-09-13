import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Waiting from '../../components/widgets/waiting/waiting.component';

const ProtectedRoute = ({ authIsEmpty, authIsLoaded, disabledAfterSignIn, component, path, exact }) => {
  if (authIsLoaded) {
    if (disabledAfterSignIn && authIsEmpty) return <Route path={path} exact={exact} component={component} />;
    if (!disabledAfterSignIn && !authIsEmpty) return <Route path={path} exact={exact} component={component} />;
    if (disabledAfterSignIn && !authIsEmpty) return <Redirect to="/dashboard" />;
    if (!disabledAfterSignIn && authIsEmpty) return <Redirect to="/sign-in" />;
  }
  return <Waiting screen />;
};

ProtectedRoute.propTypes = {
  authIsEmpty: PropTypes.bool.isRequired,
  authIsLoaded: PropTypes.bool.isRequired,
  disabledAfterSignIn: PropTypes.bool,
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.elementType.isRequired,
};

ProtectedRoute.defaultProps = {
  disabledAfterSignIn: false,
  path: null,
  exact: false,
};

export default ProtectedRoute;
