import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from '../components-03-005/App-03-005';
import 'index.css';


// Лекция 13.03.2023  (Алиев-Ломач)

// // Подключение Bootstrap в html
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

// Примеры жизненного цикла см. в FormLogin
// Рендер по запросу с использованием PureComponent см. Counter

ReactDOM.createRoot(document.getElementById('root')).render(<App />);