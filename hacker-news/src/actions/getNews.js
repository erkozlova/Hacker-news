import * as api from '../utils/api';

export const getNews =  () => async (dispatch) => {

  try {
    dispatch({
      type: 'GETNEWS_START',
    });
    const data = await api.getNewsList();

    if(!data || !data.length) {
      throw new Error('Not found');
    }
    const news = data.slice(0,100);

    const newsData = await Promise.all(news.map(async (item) => {
      try {
          const itemData = await api.getNews(item);
         
          if(!itemData || !Object.keys(itemData).length) {
            throw new Error('Not found');
          }
          return itemData;
      } catch (_) {
        return dispatch({
          type: 'GETNEWS_FAILED',
        });
      }
    }));

    // dispatch({
    //   type: 'GETNEWS_FINISH'
    // });

    return dispatch({
      type: 'GETNEWS_SUCCESS',
      payload: newsData,
    });
  } catch (_) {
      return dispatch({
        type: 'GETNEWS_FAILED',
      });
  }
};
