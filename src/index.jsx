import React from 'react';

import ReactDOM from 'react-dom';

import store from '_redux/store';

import { Provider } from 'react-redux';

import { ThemeProvider } from '@emotion/react';

import { BrowserRouter } from 'react-router-dom';

import theme from 'style/theme';

import App from './App';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
