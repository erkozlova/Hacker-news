import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store";
import {
  GET_COMMENTS_SUCCESS, 
  GET_COMMENTS_FAILED, 
  GET_COMMENTS_REQUEST
} from "../../constants";
import { Comment } from "../../types";


type GetCommentsRequestAction = {
  type: typeof GET_COMMENTS_REQUEST;
}

type GetCommentsSuccessAction = {
  type: typeof GET_COMMENTS_SUCCESS;
  payload: {
    data: Record<number, Comment>;
    path: number[]; 
  };
}

type GetCommentsFailedtAction = {
  type: typeof GET_COMMENTS_FAILED;
}

export type GetCommentsActions = 
  GetCommentsRequestAction |
  GetCommentsSuccessAction |
  GetCommentsFailedtAction;

export type GetCommentsThunk = ThunkAction<void, RootState, unknown, GetCommentsActions>;