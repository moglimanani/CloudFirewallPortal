import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import createCRReducer from './createCRreducer';

const rootReducer = combineReducers({
  createCR: createCRReducer
});

export default rootReducer;
