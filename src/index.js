import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './style/globalStyle.css'
ReactDOM.render(
  <Provider store={store}>
    <>
      <Home />
    </>
  </Provider>,
  document.getElementById('root')
);
