import { combineReducers } from 'redux'
import { newsList } from './newsList';
import { newsItem } from './newsItem';

export default combineReducers({
  newsList,
  newsItem
})
