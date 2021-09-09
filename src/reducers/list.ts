import { GetListActions } from "../actions/types";
import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAILED,
  GET_LIST_PROCESS,
} from "../constants";
import { Item } from "../types";

type State = {
  data: Item[];
  isLoading: boolean;
  loadingProcess: number;
}

export const initialState: State = { data: [], isLoading: false, loadingProcess: 0 };

export const list = (state = initialState, action: GetListActions) => {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_LIST_PROCESS:
      return {
        ...state,
        loadingProcess: state.loadingProcess + 1,
      };

    case GET_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        loadingProcess: 0,
      };

    case GET_LIST_FAILED:
      return {
        ...state,
        data: [],
        isLoading: false,
      };

    default:
      return state;
  }
};
