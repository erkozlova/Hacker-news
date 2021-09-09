import { ThunkAction } from "redux-thunk";
import {
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILED,
} from "../../constants";
import { RootState } from "../../store";
import { Item } from "../../types";

type GetItemRequestAction = {
  type: typeof GET_ITEM_REQUEST;
}

type GetItemSuccessAction = {
  type: typeof GET_ITEM_SUCCESS;
  payload: Item;
}

type GetItemFailedAction = {
  type: typeof GET_ITEM_FAILED;
}

export type GetItemActions = 
  GetItemRequestAction |
  GetItemSuccessAction |
  GetItemFailedAction;

export type GetItemThunk = ThunkAction<void, RootState, unknown, GetItemActions>;