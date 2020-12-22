import React from 'react';
import ReactDOM from 'react-dom';
import App from './router';
import 'normalize.css';
import 'ytu-mobile/dist/index.css';
// import '@ytu-mf/ytu-mobile-biz/dist/index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
