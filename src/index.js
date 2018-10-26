import React from 'react';
import { Provider, connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import configureStore from 'redux/configureStore';
import AppNavigator from 'router';


const App = reduxifyNavigator(AppNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

export const AppWithNavigationState = connect(mapStateToProps)(App);

const store = configureStore();

export default function () {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
}
