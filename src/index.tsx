import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.local.scss';
import { Provider } from 'react-redux';
import { AppRoute } from './components/routes';
import { store } from './core/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </>
);
