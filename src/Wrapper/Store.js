import { createStore } from 'redux';
import rootReducer from './rootReducers.js';

//we create a <<store>> with the component reducer called (imported in line 1 and 2)
//we also call an 'redux-devtools-extenstion' so we can visualise the work into the browser
//but you should have 'redux-devtools for browser' installed first
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
