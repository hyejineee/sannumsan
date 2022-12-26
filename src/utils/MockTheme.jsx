import React from 'react';
import theme from 'style/theme';
import { ThemeProvider } from '@emotion/react';

function MockTheme({ children }) {
  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

export default MockTheme;
