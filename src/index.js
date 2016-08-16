import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import Main from './components/Main';

const store = configureStore();

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
