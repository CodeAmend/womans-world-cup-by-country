import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import App from './components/app.js';

require('../style/style.less');

const createStoreFromMiddleware = applyMiddleware(reduxThunk)(createStore)


ReactDOM.render(
  <Provider store={createStoreFromMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
    <App />
  </Provider>
  , document.querySelector('.container'));
