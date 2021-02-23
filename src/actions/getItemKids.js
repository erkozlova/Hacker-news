import * as api from "../utils/api";
import {
  GET_ITEM_KIDS_NEW,
  GET_ITEM_KIDS_FAILED,
  GET_ITEM_KIDS_REQUEST,
  GET_ITEM_KIDS_CURRENT,

  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_REQUEST,
} from "../constants";

export const getItemKids = (id) => async (dispatch) => {
  dispatch({
    type: GET_ITEM_KIDS_REQUEST,
  });

  try {
    const itemData = await api.getNews(id);

    if (!Object.keys(itemData).length) {
      throw new Error("Not found");
    }

    if (itemData.kids && itemData.kids.length) {
      dispatch({
        type: GET_COMMENTS_REQUEST,
      });

      const newComments = await Promise.all(
        itemData.kids.map((item) => {
          return api.getComment(item);
        })
      );

      if (!newComments || !newComments.length) {
        throw new Error("Not found");
      }

      const commentDataObj = newComments.reduce((obj, comment) => {
        obj[comment.id] = {
          ...comment,
          comments: {},
          path: [comment.id],
        };
        return obj;
      }, {});

      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: {
          data: commentDataObj,
          path: [],
        },
      });

      return dispatch({
        type: GET_ITEM_KIDS_NEW,
        payload: itemData.kids,
      });
    }
    return dispatch({
      type: GET_ITEM_KIDS_CURRENT,
    });
  } catch (_) {
    return dispatch({
      type: GET_ITEM_KIDS_FAILED,
    });
  }
};
