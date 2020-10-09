
import React from 'react'
import ReactDOM from 'react-dom';

// redux store
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './store'

import App from './App'
// 引入antd样式
import 'antd/dist/antd.css';
// 引入基础样式
import 'assets/css/base.scss';

import global from '@/static/global.js'

React.$global = global


ReactDOM.render(
    (
        <Provider store={store}>

            <App />
        </Provider>
    ), document.getElementById('root')
)