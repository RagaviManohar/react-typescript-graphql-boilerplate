/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

// Use consistent styling
import 'sanitize.css/sanitize.css';
import './styles/scss/ui.scss';

// Child Components
import App from 'app';

import { configureAppStore } from 'store/configureStore';

// Material
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import muiTheme from 'styles/theme/mui-theme';

// Material Date Pickers
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import reportWebVitals from 'reportWebVitals';

// Initialize languages
import './locales/i18n';

// Graphql
import { ApolloProvider } from '@apollo/client';
import graphqlClient from 'services/graphql-client';

const openSansObserver = new FontFaceObserver('Inter', {});

openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const store = configureAppStore();

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <MuiThemeProvider theme={muiTheme}>
      <HelmetProvider>
        <StrictMode>
          <ApolloProvider client={graphqlClient}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </LocalizationProvider>
          </ApolloProvider>
        </StrictMode>
      </HelmetProvider>
    </MuiThemeProvider>
  </Provider>,
);

// Hot reload-able translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
