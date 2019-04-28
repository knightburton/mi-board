import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configure.store';
import { Router } from 'react-router-dom';
import history from './side.effects/history';
import * as serviceWorker from './serviceWorker';

import App from './components/app.component';

import 'typeface-roboto';
import './index.scss';

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  );

  serviceWorker.unregister();
});
