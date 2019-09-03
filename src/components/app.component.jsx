import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import AppBar from './widgets/appbar/appbar.container';
import Drawer from './widgets/drawer/drawer.container';
import Wrapper from './widgets/wrapper/wrapper.container';
import Snackbars from './widgets/snackbars/snackbars.container';
import Waiting from './widgets/waiting/waiting.component';

import AppRoutes from '../routes/app-routes';

import { ProfileProvider } from './contexts/profile';

const App = ({ authIsLoaded, authIsEmpty, isAppWaiting, checkSignIn }) => {
  useEffect(() => {
    checkSignIn();
  }, [authIsLoaded, authIsEmpty, checkSignIn]);

  return (
    <ProfileProvider>
      <Drawer />
      <Wrapper>
        <AppBar />
        <AppRoutes />
      </Wrapper>
      {isAppWaiting && <Waiting app />}
      <Snackbars />
    </ProfileProvider>
  );
};

App.propTypes = {
  authIsLoaded: PropTypes.bool.isRequired,
  authIsEmpty: PropTypes.bool.isRequired,
  isAppWaiting: PropTypes.bool.isRequired,
  checkSignIn: PropTypes.func.isRequired,
};

export default App;
