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

import store from './store/configure-store';
import history from './side-effects/history';
import firebase from './side-effects/firebase';
import theme from './theme';
import * as serviceWorker from './serviceWorker';

import App from './components/app.container';

import 'typeface-roboto';

const rrfProps = {
  firebase,
  config: {
    userProfile: 'profiles',
    useFirestoreForProfile: true
  },
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={history}>
            <App />
          </Router>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
