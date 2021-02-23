import * as api from "../utils/api";
import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILED,
  GET_LIST_PROCESS,
} from "../constants";

// Загружает список новостей
export const getList = () => async (dispatch) => {
  dispatch({
    type: GET_LIST_REQUEST,
  });

  try {
    // Получаем с сервера список свежих новостей (500 новостей)
    const data = await api.getNewsList();

    // Если нет данных, кидаем ошибку
    if (!data || !data.length) {
      throw new Error("Not found");
    }

    // Выбираем первые 100 (самые свежие)
    const news = data.slice(0, 100);

    // Получаем информации о каждой новости
    const newsData = await Promise.all(
      news.reduce((array, item) => {
        const itemData = api.getNews(item).then((res) => {
          // Изменяем количество пришедших новостей для отображения в лоадере
          dispatch({
            type: GET_LIST_PROCESS,
          });
          return res;
        });
        
        return [...array, itemData];
      }, [])
    );

    // Отбираем не пустые новости
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
