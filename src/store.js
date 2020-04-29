import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

const middlewares = [thunkMiddleware];
const preloadedState = {};
const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
