import { GETNEWSLIST_START, GETNEWSLIST_SUCCESS, GETNEWSLIST_FAILED, GETNEWSLIST_PROCESS } from "../constants";

const initialState = { data: [], isLoading: false, loadingProcess: 0 };

export const newsList = (state = initialState, action) => {
  switch (action.type) {
    case GETNEWSLIST_START:
      return { 
        ...state,
         isLoading: true
      };

    case GETNEWSLIST_PROCESS: 
      return {
        ...state,
        loadingProcess: state.loadingProcess+1
      }

    case GETNEWSLIST_SUCCESS:
      return { 
        ...state,
        data: action.payload,
        isLoading: false,
        loadingProcess: 0
      };

    case GETNEWSLIST_FAILED:
      return { 
        ...state,
        data: []
      };

    default:
      return state;
  }
};
