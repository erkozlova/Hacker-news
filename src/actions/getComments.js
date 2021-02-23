import * as api from "../utils/api";
import {
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILED,
  GET_COMMENTS_REQUEST,
} from "../constants";

export const getComments = (commentsId, path = []) => async (dispatch) => {
  dispatch({
    type: GET_COMMENTS_REQUEST,
  });

  try {
    if (!commentsId.length) {
      throw new Error("Not found");
    }

    const commentsData = await Promise.all(
      commentsId.map((item) => {
        return api.getComment(item);
      })
    );

    if (!commentsData.length) {
      throw new Error("Not found");
    }

    const commentDataObj = commentsData.reduce((obj, comment) => {
      obj[comment.id] = {
        ...comment,
        comments: {},
        path: [...path, comment.id],
      };
      return obj;
    }, {});

    return dispatch({
      type: GET_COMMENTS_SUCCESS,
      payload: {
        data: commentDataObj,
        path,
      },
    });
  } catch (err) {
    return dispatch({
      type: GET_COMMENTS_FAILED,
    });
  }
};
