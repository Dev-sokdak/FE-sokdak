import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import store from './app/config/configStore';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <GlobalStyle />
        <App />
      </CookiesProvider>
    </ThemeProvider>
  </Provider>,
);
