import React from 'react';
import PropTypes from 'prop-types';

import AppBar from './widgets/appbar/appbar.container';
import Drawer from './widgets/drawer/drawer.container';
import Wrapper from './widgets/wrapper/wrapper.container';
import Snackbars from './widgets/snackbars/snackbars.container';
import Waiting from './widgets/waiting/waiting.component';

import AppRoutes from '../routes/app-routes';

import { ProfileProvider } from './contexts/profile';

const App = ({ isAppWaiting }) => (
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

App.propTypes = {
  isAppWaiting: PropTypes.bool.isRequired,
};

export default App;
