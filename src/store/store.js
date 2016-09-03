import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

const middlewares = [thunkMiddleware, routerMiddleware(browserHistory)];

if (__DEV__) {
  /** Redux Logger (P.S: 打印日志会造成轻微的卡顿) **/
  const createLogger = require('redux-logger');
  middlewares.push(createLogger());
}

const createStoreWithMiddleware = applyMiddleware(
  ...middlewares
)(createStore);

const configureStore = (initialState) => createStoreWithMiddleware(rootReducer, initialState);

export default configureStore;