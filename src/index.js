// import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/store';
import routes from './routes';

injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

if (__DEV__ && __WHY_DID_YOU_UPDATE__) {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}
if (__DEV__) {
  console.info('[当前环境] 开发环境')
}
if (__PROD__) {
  console.info('[当前环境] 生产环境')
}

render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app'));