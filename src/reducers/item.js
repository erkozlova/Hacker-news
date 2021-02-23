import {
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILED,
  GET_ITEM_REQUEST,
  GET_ITEM_KIDS_NEW,
  GET_ITEM_KIDS_FAILED,
  GET_ITEM_KIDS_REQUEST,
  GET_ITEM_KIDS_CURRENT,
} from "../constants";

const initialState = { data: {}, isLoading: false };

export const item = (state = initialState, action) => {
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
        data: {},
        isLoading: false,
      };
    case GET_ITEM_KIDS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ITEM_KIDS_NEW:
      return {
        ...state,
        data: {
          ...state.data,
          kids: action.payload,
        },
        isLoading: false,
      };

    case GET_ITEM_KIDS_CURRENT:
      return {
        ...state,
        isLoading: false,
      };

    case GET_ITEM_KIDS_FAILED:
      return {
        ...state,
        // data: {},
        isLoading: false,
      };
    default:
      return state;
  }
};
