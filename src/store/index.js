import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducer/auth';
import reducer from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let store;
if (process.env.NODE_ENV === 'development') {
    store = createStore(reducer, applyMiddleware(thunk, logger));
} else {
    store = createStore(reducer, applyMiddleware(thunk));
}

export default store;