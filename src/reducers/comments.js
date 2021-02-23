import { isEmpty } from "lodash";
import {
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILED,
  GET_COMMENTS_REQUEST,
} from "../constants";

const initialState = { data: {}, isLoading: false };

const setComments = (oldComments, data, path) => {
  if (!path.length) {
    return data;
  }

  // if(isEmpty(oldComments)) {
  //   return {};
  // }

  const copy = JSON.parse(JSON.stringify(oldComments));
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

export const comments = (state = initialState, action) => {
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
