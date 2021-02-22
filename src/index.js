import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.slim.min.js'
import 'popper.js/dist/popper.min.js'
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'
/*import 'sass-loader/dist/getDefaultSassImplementation'
import 'sass-loader/dist/getSassImplementation'
import 'sass-loader/dist/index'
import 'sass-loader/dist/cjs'
import 'loader-runner/lib/loadLoader'
import 'loader-runner/lib/LoaderRunner'
import 'webpack/lib/NormalModule'
import 'webpack/lib/NormalModuleFactory'
import 'webpack/lib/Compiler'
import 'webpack/lib/webpack'*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
