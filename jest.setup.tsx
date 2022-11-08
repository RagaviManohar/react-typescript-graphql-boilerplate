import * as React from 'react';

import * as reactHookForm from 'react-hook-form';

// Redux-saga
import { Provider } from 'react-redux';
import * as reduxSagaEffects from 'redux-saga/effects';

// React testing Library
import {
  render,
  cleanup,
  fireEvent,
  act,
  waitFor,
  renderHook as reactRenderHook,
  RenderHookResult,
} from '@testing-library/react';
import { createRenderer } from 'react-test-renderer/shallow';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import renderer from 'react-test-renderer';

// i18
import i18next from 'i18next';

// Apollo-client
import { MockedProvider } from '@apollo/react-testing';

// Material Theme
import { AlertColor, ThemeProvider as MuiThemeProvider } from '@mui/material';
import muiTheme from 'styles/theme/mui-theme';

// Store
import { configureAppStore } from 'store/configureStore';

// this mock makes sure any components using the translate hook can use it without a warning being shown
jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

const ThemeWrapper = ({ children }) => {
  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
};

const MockHelmetWrapper = ({ children }) => {
  return (
    <ThemeWrapper>
      <HelmetProvider>{children}</HelmetProvider>
    </ThemeWrapper>
  );
};

const MockRouterWrapper = ({ children }) => {
  return (
    <MemoryRouter>
      <MockHelmetWrapper>{children}</MockHelmetWrapper>
    </MemoryRouter>
  );
};

const StoreWrapper = ({ children }) => {
  const store = configureAppStore();

  return (
    <Provider store={store}>
      <MockedProvider>
        <MockRouterWrapper>{children}</MockRouterWrapper>
      </MockedProvider>
    </Provider>
  );
};

const mockError = {
  code: 400,
  message: 'Test Error',
};

const mockProps = {
  walletAddress: '0x697d5F9fEE34575g23f995A2d446E46f4b982d4f',
  modifiedWalletAddress: '0x697*****82d4f',
  walletType: 'meta-mask',
};

const formatSnackBarSuccess = (
  message: string,
): { message: string; theme: AlertColor } => ({ message, theme: 'success' });

type RenderHookType = <
  Hook extends (...props: any) => any,
  Result = ReturnType<Hook>,
>(
  hook: Hook,
) => RenderHookResult<Result, any>;

const renderHook: RenderHookType = hook =>
  reactRenderHook(hook, {
    wrapper: StoreWrapper,
  });

export {
  React,
  reactHookForm,
  render,
  cleanup,
  fireEvent,
  act,
  waitFor,
  createRenderer,
  MemoryRouter,
  Routes,
  Route,
  i18next,
  MuiThemeProvider,
  muiTheme,
  HelmetProvider,
  renderer,
  ThemeWrapper,
  MockHelmetWrapper,
  MockRouterWrapper,
  StoreWrapper,
  mockError,
  mockProps,
  reduxSagaEffects,
  formatSnackBarSuccess,
  renderHook,
};
