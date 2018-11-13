import React from 'react';
import { Provider, connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { ThemeProvider } from 'styled-components';

import configureStore from './redux/configureStore';
import AppNavigator from './router';
import theme from './theme';


const App = reduxifyNavigator(AppNavigator, 'root');

const mapStateToProps = ({ nav }) => ({
  state: nav,
});

export const AppWithNavigationState = connect(mapStateToProps)(App);

const store = configureStore();

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    </ThemeProvider>
  );
}
