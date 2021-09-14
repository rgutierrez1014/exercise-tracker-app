import { hot } from "react-hot-loader/root";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import app_config from './config';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// axios settings
axios.defaults.baseURL = app_config.api_base_url;

const render = (AppComponent) => {
  ReactDOM.render(
    <React.StrictMode>
      <AppComponent />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// hot reload on dev only
if (app_config.app_env === 'development') {
  render(hot(App));
} else {
  render(App);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
