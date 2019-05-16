import React from 'react';
import ReactDOM from 'react-dom';
import ReactReduxFirebaseProvider from 'react-redux-firebase/lib/ReactReduxFirebaseProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { createFirestoreInstance } from 'redux-firestore';
import { Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';

import { store } from './store/configure.store';
import fontawsome from './side.effects/font-awesome';
import history from './side.effects/history';
import firebase from './side.effects/firebase';
import theme from './theme';
import * as serviceWorker from './serviceWorker';

import App from './components/app.container';

import 'typeface-roboto';
import './index.scss';

library.add(...fontawsome);

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true
  },
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
