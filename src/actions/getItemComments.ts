import * as api from "../utils/api";
import {
 GET_ITEM_COMMENTS_SUCCESS,
 GET_ITEM_COMMENTS_FAILED,
 GET_ITEM_COMMENTS_REQUEST,

  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_REQUEST,
} from "../constants";
import { Comment } from "../types";
import { GetItemCommentThunk } from "./types";

// Загружает информацию о выбранной новости и список комментарев к ней
export const getItemComments = (id: number): GetItemCommentThunk => async (dispatch) => {
  dispatch({
    type:GET_ITEM_COMMENTS_REQUEST,
  });

  try {
    // Получаем информацию о открытой новости с сервера
    const itemData = await api.getNews(id);

    // Если информация пустая, выбрасываем ошибку
    if (!Object.keys(itemData).length) {
      throw new Error("Not found");
    }

    // Если у новости есть комментарии, хотим получить их с сервера
    if (itemData.kids && itemData.kids.length) {
      dispatch({
        type: GET_COMMENTS_REQUEST,
      });

      // Получаем комментарии к этой новости с сервера
      const newComments = await Promise.all(
        itemData.kids.map((item) => {
          return api.getComment(item);
        })
      );

      // Если нет комментариев, выбрасываем обишку
      if (!newComments || !newComments.length) {
        throw new Error("Not found");
      }

      // Собираем информацию о каждом комментарии в объект, добавив путь, где он должен хранится в стейте комментариев
      const commentDataObj = newComments.reduce((obj, comment) => {
        obj[comment.id] = {
          ...comment,
          comments: {},
          path: [comment.id],
        };
        return obj;
      }, {} as Record<number, Comment>);

      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: {
          data: commentDataObj,
          path: [],
        },
      });
    }

    // После получаея комментариев отправляем в редюсер информацио о новости
    return dispatch({
      type:GET_ITEM_COMMENTS_SUCCESS,
      payload: itemData,
    });
  } catch (_) {
    return dispatch({
      type:GET_ITEM_COMMENTS_FAILED,
    });
  }
};
