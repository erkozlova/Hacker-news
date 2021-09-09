import { GetItemActions, GetItemCommentActions } from "../actions/types";
import {
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILED,
  GET_ITEM_REQUEST,
 GET_ITEM_COMMENTS_FAILED,
 GET_ITEM_COMMENTS_REQUEST,
 GET_ITEM_COMMENTS_SUCCESS,
} from "../constants";
import { Item } from "../types";

type State = {
  data: Item | null;
  isLoading: boolean;
}

export const initialState: State = { data: null, isLoading: false };

export const item = (state = initialState, action: GetItemActions | GetItemCommentActions) => {
  switch (action.type) {
    case GET_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ITEM_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case GET_ITEM_FAILED:
      return {
        ...state,
        data: null,
        isLoading: false,
      };
    case GET_ITEM_COMMENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ITEM_COMMENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case GET_ITEM_COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
