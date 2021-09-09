import * as api from "../utils/api";
import {
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILED,
  GET_ITEM_REQUEST,
} from "../constants";
import { GetItemThunk } from "./types";

export const getItem = (id: number): GetItemThunk => async (dispatch) => {
  dispatch({
    type: GET_ITEM_REQUEST,
  });

  try {
    const itemData = await api.getNews(id);

    if (!Object.keys(itemData).length) {
      throw new Error("Not found");
    }

    return dispatch({
      type: GET_ITEM_SUCCESS,
      payload: itemData,
    });
  } catch (_) {
    return dispatch({
      type: GET_ITEM_FAILED,
    });
  }
};
