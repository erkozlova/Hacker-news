import * as api from "../utils/api";
import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILED,
  GET_LIST_PROCESS,
} from "../constants";

export const getList = () => async (dispatch) => {
  dispatch({
    type: GET_LIST_REQUEST,
  });

  try {
    const data = await api.getNewsList();

    if (!data || !data.length) {
      throw new Error("Not found");
    }

    const news = data.slice(0, 100);

    const newsData = await Promise.all(
      news.reduce((array, item) => {
        const itemData = api.getNews(item).then((res) => {
          dispatch({
            type: GET_LIST_PROCESS,
          });
          return res;
        });

        return [...array, itemData];
      }, [])
    );

    const filterNewsData = newsData.reduce(
      (array, curr) => (curr ? [...array, curr] : array),
      []
    );

    return dispatch({
      type: GET_LIST_SUCCESS,
      payload: filterNewsData,
    });
  } catch (_) {
    return dispatch({
      type: GET_LIST_FAILED,
    });
  }
};
