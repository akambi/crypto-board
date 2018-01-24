import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Layout } from './components/Layout/Layout';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { AppState } from './types/index';
import { Provider } from 'react-redux';
import { fetchAvailableCoins } from './actions/creators';
import coinApp from './reducers/index';
export const WebSocket = require('ws');

const loggerMiddleware = createLogger();

export function configureStore() {  
  const appStore = createStore<AppState>(
    coinApp,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
  );
  return appStore;
}

export const store = configureStore();

store.dispatch(fetchAvailableCoins())
     .then(() => window.console.log(store.getState()));

import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './index.css';

ReactDOM.render(
    <Provider store={store}>
      <Layout />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
