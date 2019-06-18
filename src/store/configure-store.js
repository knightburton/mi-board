import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import history from '../side-effects/history';
import rootReducer from './root-reducer';

const isDevelopment = process.env.NODE_ENV === 'development';

const middlewares = applyMiddleware(
  thunk.withExtraArgument({
    history
  })
);

const enhancers = [
  middlewares
];

export default isDevelopment
  ? createStore(rootReducer, composeWithDevTools(...enhancers))
  : createStore(rootReducer, compose(...enhancers));
