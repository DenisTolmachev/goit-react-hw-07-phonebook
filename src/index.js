import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'style/theme';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import GlobalCSS from './style/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalCSS />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
