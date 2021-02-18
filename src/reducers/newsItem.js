import { GETNEWSITEM_SUCCESS, GETNEWSITEM_FAILED } from '../constants';

const initialState = { data: {} };

export const newsItem = (state = initialState, action) => {
  switch (action.type) {

    case GETNEWSITEM_SUCCESS:
      return { 
        ...state,
        data: action.payload,
      };

    case GETNEWSITEM_FAILED:
      return { 
        ...state,
        data: {}
      };

    default:
      return state;
  }
};

