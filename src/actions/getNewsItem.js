import * as api from '../utils/api';
import { GETNEWSITEM_SUCCESS, GETNEWSITEM_FAILED } from '../constants';

export const getNewsItem =  (id) => async (dispatch) => {
 
  try {
    const itemData = await api.getNews(id);
    
    return dispatch({
      type: GETNEWSITEM_SUCCESS,
      payload: itemData,
    });
  } catch (_) {
      return dispatch({
        type: GETNEWSITEM_FAILED,
      });
  }
};