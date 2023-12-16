import React from 'react';
import { setupStore } from '../store';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../shared/styles/theme/theme';
import { GlobalStyles } from '../../shared/styles/global';
import { Provider } from 'react-redux';
import Notification from '../../components/ui/notification/Notification';
import Router from '../router';
import AntdConfigProvider from './AntdConfigProvider';
import AuthProvider from './AuthProvider';

const Providers = () => {
  const store = setupStore();

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <AntdConfigProvider>
        <Provider store={store}>
          <AuthProvider />
          <Notification />
          <Router />
        </Provider>
      </AntdConfigProvider>
    </ThemeProvider>
  );
};

export default Providers;
