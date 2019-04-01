import { createStore } from 'redux';
import myReducer from '../reducer/reducer';

let store = createStore( myReducer );

export default store;