
import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
// 引入antd样式
import 'antd/dist/antd.css';
// 引入基础样式
import 'assets/css/base.scss';

import global from '@/static/global.js'

React.$global = global
ReactDOM.render(
    <App />, document.getElementById('root')
)