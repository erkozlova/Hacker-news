import { createStore } from 'redux';
import reducer_test from './reducers/test_reducer';

const store = createStore(reducer_test);


store.subscribe(() => console.log('pikachu', store.getState()));
// console.log(store.getState());

export default store;

