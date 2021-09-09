import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store";
import { GET_LIST_FAILED, GET_LIST_PROCESS, GET_LIST_REQUEST, GET_LIST_SUCCESS } from "../../constants";
import { Item } from "../../types";

type GetListRequestAction = {
  type: typeof GET_LIST_REQUEST;
}

type GetListProccesstAction = {
  type: typeof GET_LIST_PROCESS;
}

type GetListSuccessAction = {
  type: typeof GET_LIST_SUCCESS;
  payload: Item[];
}
type GetListFailedAction = {
  type: typeof GET_LIST_FAILED;
}

export type GetListActions = 
  GetListRequestAction |
  GetListProccesstAction |
  GetListSuccessAction |
  GetListFailedAction;

export type GetListThunk = ThunkAction<void, RootState, unknown, GetListActions>;