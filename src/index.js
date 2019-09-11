import React from 'react';
import ReactDOM from 'react-dom';
import ReactReduxFirebaseProvider from 'react-redux-firebase/lib/ReactReduxFirebaseProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { createFirestoreInstance } from 'redux-firestore';
import { Router } from 'react-router-dom';

import history from './side-effects/history';
import store from './store/configure-store';
import firebase, { rfConfig } from './side-effects/firebase';
import theme from './theme';
import * as serviceWorker from './serviceWorker';

import MainRoutes from './routes/main-routes';

import 'typeface-roboto';

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={rfConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}
    >
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={history}>
            <MainRoutes />
          </Router>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
