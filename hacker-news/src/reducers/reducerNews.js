// TODO Мне не нравится что изначальное значение true, но без этого в начале загруки страницы возникают ошибки
export const reducerNews = (state = {data: [], isLoading: true}, action) => {
  switch(action.type) {
    case "GETNEWS_START": return {...state, isLoading: true};
    case 'GETNEWS_SUCCESS': return { ...state, data: action.payload, isLoading: false};
    case 'GETNEWS_FAILED': return {...state, data: []};
    default: return state;
  }
}