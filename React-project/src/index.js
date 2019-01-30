import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js'
import 'antd/dist/antd.css';
import './main.css'

import counter from './reducer/index'
import store from '../src/store/store'


const render= ()=> {
  ReactDom.render(
  <App store={store}/>,
  document.getElementById('root')
)}
render();

store.subscribe(render);
if (module.hot) {
  module.hot.accept()
}