import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { CookiesProvider } from 'react-cookie';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CookiesProvider>
      <GlobalStyle />
      <App />
    </CookiesProvider>
  </ThemeProvider>,
);
