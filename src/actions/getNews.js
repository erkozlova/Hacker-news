import * as api from '../utils/api';
import { GETNEWS_START, GETNEWS_SUCCESS, GETNEWS_FAILED, GETNEWS_PROCESS } from '../constants';

export const getNews =  () => async (dispatch) => {
  dispatch({
    type: GETNEWS_START,
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
              type: GETNEWS_PROCESS,
            });
            return res;
          });
         
          return [...array, itemData];
    }, []));
    
    const filterNewsData = newsData.reduce((array, curr) => curr? [...array, curr] : array, []);

    return dispatch({
      type: GETNEWS_SUCCESS,
      payload: filterNewsData,
    });
  } catch (_) {
      return dispatch({
        type: GETNEWS_FAILED,
      });
  }
};
