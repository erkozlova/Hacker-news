import * as api from "../utils/api";
import { GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILED, GET_COMMENTS_REQUEST } from "../constants";
import { Comment } from "../types";
import { GetCommentsThunk } from "./types";

// Загрузка вложеных комментариев к кликнутому комментарию
export const getComments = (commentsId: number[], path=[]): GetCommentsThunk => async (dispatch) => {
  dispatch({
    type: GET_COMMENTS_REQUEST,
  });

  try {
    // Если у комментария нет вложенного, выбрасываем ошибку
    if(!commentsId.length) {
      throw new Error("Not found");
    }

    // Получаем информацию о вложенных комментариях
    const commentsData = await Promise.all(
      commentsId.map(( item) => { 
        return api.getComment(item);
    }));

    // Если с сервера не пришло комментариев, выбрасываем ошибку
    if(!commentsData.length) {
      throw new Error("Not found");
    }

    // Записываем информацию о комментариях в объект, добавляя путь, где в стейте должен хранится каждый комментарий
    const commentDataObj = commentsData.reduce((obj, comment) => {
      obj[comment.id] = {
        ...comment,
        comments: {},
        path: [...path, comment.id]
      };
      return obj;
    }, {} as Record<number, Comment>);

    return dispatch({
      type: GET_COMMENTS_SUCCESS,
      payload: {
        data: commentDataObj,
        path,
      }
    });
  } catch (err) {
    return dispatch({
      type: GET_COMMENTS_FAILED,
    });
  }
};
