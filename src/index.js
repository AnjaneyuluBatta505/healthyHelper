import React from 'react';
import { Provider } from 'react-redux';

import App from './App';

import configureStore from './redux/configureStore';

const store = configureStore();

export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
