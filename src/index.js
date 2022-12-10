import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { AppProvider } from './hooks/useContext/ContextAPI';
import store from './redux/store';
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // hooks
  // <AppProvider>
  //   <App />
  // </AppProvider>

  // redux
  <Provider store={store}>
    <App />
  </Provider>
);