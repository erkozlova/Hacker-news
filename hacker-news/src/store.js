import { createStore, applyMiddleware } from 'redux';
import { reducerNews } from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducerNews, applyMiddleware(thunk));

export default store;
