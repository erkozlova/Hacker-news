import { difference } from "lodash";
import * as api from "../utils/api";
import {
  GET_ITEM_KIDS_NEW,
  GET_ITEM_KIDS_FAILED,
  GET_ITEM_KIDS_REQUEST,
  GET_ITEM_KIDS_CURRENT,
} from "../constants";
import { getComments } from "./getComments";

// const checkKids = (newData, currentData) => {
//   if (newData.length > currentData.length && difference(newData, currentData).length) {
//     return false;
//   }
//   if(difference(currentData, newData).length) {
//     return false;
//   }
//   return true;
// }

export const getItemKids = (id, kids) => async (dispatch) => {
  dispatch({
    type: GET_ITEM_KIDS_REQUEST,
  });

  try {
    const itemData = await api.getNews(id);

    if (!Object.keys(itemData).length) {
      throw new Error("Not found");
    }

    // if(itemData.kids && !checkKids(itemData.kids, kids)) {
    if (itemData.kids) {
      dispatch(getComments(itemData.kids));
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
