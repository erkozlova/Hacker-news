import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store";
import {
  GET_ITEM_COMMENTS_SUCCESS,
  GET_ITEM_COMMENTS_FAILED,
  GET_ITEM_COMMENTS_REQUEST,
 
   GET_COMMENTS_SUCCESS,
   GET_COMMENTS_REQUEST,
 } from "../../constants";
import { Comment, Item } from "../../types";


type GetItemCommentRequestAction = {
  type: typeof GET_ITEM_COMMENTS_REQUEST;
}

type GetItemCommentSuccessAction = {
  type: typeof GET_ITEM_COMMENTS_SUCCESS;
  payload: Item;
}

type GetItemCommentFailedAction = {
  type: typeof GET_ITEM_COMMENTS_FAILED;
}

type GetCommentRequestAction = {
  type: typeof GET_COMMENTS_REQUEST;
}

type GetCommentSuccessAction = {
  type: typeof GET_COMMENTS_SUCCESS;
  payload: {
    data: Record<number, Comment>;
    path: []; 
  };
}

export type GetItemCommentActions = 
  GetItemCommentRequestAction |
  GetItemCommentSuccessAction |
  GetItemCommentFailedAction |
  GetCommentRequestAction |
  GetCommentSuccessAction;

export type GetItemCommentThunk = ThunkAction<void, RootState, unknown, GetItemCommentActions>;