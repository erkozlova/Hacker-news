import { GetCommentsActions } from "../actions/types";
import {
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILED,
  GET_COMMENTS_REQUEST,
} from "../constants";
import { Comment } from "../types";

type State = {
  data: Record<number, Comment> | {};
  isLoading: boolean;
}

// TODO Заменить {} в data на null
export const initialState: State = { data: {}, isLoading: false };

const setComments = (oldComments: Record<number, Comment>, data: Record<number, Comment>, path: number[]) => {
  if (!path.length) {
    return data;
  }

  // TODO Если null, то берется {}. При записи подгруженных комментариев.
  const copy: Record<number, Comment> = JSON.parse(JSON.stringify(oldComments || {}));
  if (path.length > 1) {
    const currentPlace = copy[path[0]];
    currentPlace.comments = setComments(
      currentPlace.comments,
      data,
      path.slice(1)
    );
  } else {
    copy[path[0]].comments = data;
  }

  return copy;
};

export const comments = (state = initialState, action: GetCommentsActions) => {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COMMENTS_SUCCESS:
      const obj = setComments(
        state.data,
        action.payload.data,
        action.payload.path
      );
      return {
        ...state,
        data: obj,
        isLoading: false,
      };

    case GET_COMMENTS_FAILED:
      return {
        ...state,
        data: {},
        isLoading: false,
      };

    default:
      return state;
  }
};
