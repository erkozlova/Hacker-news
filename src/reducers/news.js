import { GETNEWS_START, GETNEWS_SUCCESS, GETNEWS_FAILED, GETNEWS_PROCESS } from "../constants";

const initialState = { data: [], isLoading: false, loadingProcess: 0 };

export const news = (state = initialState, action) => {
  switch (action.type) {
    case GETNEWS_START:
      return { 
        ...state,
         isLoading: true
      };

    case GETNEWS_PROCESS: 
      return {
        ...state,
        loadingProcess: state.loadingProcess+1
      }

    case GETNEWS_SUCCESS:
      return { 
        ...state,
        data: action.payload,
        isLoading: false,
        loadingProcess: 0
      };

    case GETNEWS_FAILED:
      return { 
        ...state,
        data: []
      };

    default:
      return state;
  }
};
