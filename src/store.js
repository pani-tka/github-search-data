import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer';
import App from './App';


const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(window.__REDUX_DEVTOOLS_EXTENSION__);

const appElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appElement
);
