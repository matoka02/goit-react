import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'index.css';

import App from '../components-07-013/App-07-013';
import Context from 'components-07-013/Context';
// import store from '../components-06-012/store/store';
import { persistor, store } from '../components-06-012/store/store';

// Лекция 14.04.2023  (Алиев-Ломач)

// // Подключение Bootstrap в html
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Context>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Context>
    </Provider>
  </BrowserRouter>
);
