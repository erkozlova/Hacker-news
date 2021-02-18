import * as api from '../utils/api';
import { GETNEWSLIST_START, GETNEWSLIST_SUCCESS, GETNEWSLIST_FAILED, GETNEWSLIST_PROCESS } from '../constants';

export const getNewsList =  () => async (dispatch) => {
  dispatch({
    type: GETNEWSLIST_START,
  });
  
  try {
    const data = await api.getNewsList();

    if(!data || !data.length) {
      throw new Error('Not found');
    }
    const news = data.slice(0,100);

    const newsData = await Promise.all(news.reduce((array, item) => {
          const itemData = api.getNews(item).then((res) => {
            dispatch({
              type: GETNEWSLIST_PROCESS,
            });
            return res;
          });
         
          return [...array, itemData];
    }, []));
    
    const filterNewsData = newsData.reduce((array, curr) => curr? [...array, curr] : array, []);

    return dispatch({
      type: GETNEWSLIST_SUCCESS,
      payload: filterNewsData,
    });
  } catch (_) {
      return dispatch({
        type: GETNEWSLIST_FAILED,
      });
  }
};
