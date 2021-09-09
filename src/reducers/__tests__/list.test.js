import { list, initialState } from '../list';
import { GET_LIST_REQUEST, GET_LIST_PROCESS, GET_LIST_SUCCESS, GET_LIST_FAILED } from '../../constants';

describe('List reducer', () => {
  it('should handle request', () => {
    const action = { type: GET_LIST_REQUEST };
    const expected = { data: [], isLoading: true, loadingProcess: 0 };
    const received = list({...initialState}, action);
    expect(received).toStrictEqual(expected);
  });

  it('should handle process', () => {
    const action = { type: GET_LIST_PROCESS };
    const expected = { data: [], isLoading: true, loadingProcess: 1 };
    const received = list({...initialState, isLoading: true}, action);
    expect(received).toStrictEqual(expected);
  });

  it('should handle success', () => {
    const action = { payload: [1, 2, 3], type: GET_LIST_SUCCESS };
    const expected = { data: [1, 2, 3], isLoading: false, loadingProcess: 0 };
    const received = list({...initialState, isLoading: true, loadingProcess: 100}, action);
    expect(received).toStrictEqual(expected);
  });

  it('should handle fail', () => {
    const action = { type: GET_LIST_FAILED };
    const expected = { data: [], isLoading: false, loadingProcess: 100 };
    const received = list({...initialState, isLoading: true, loadingProcess: 100}, action);
    expect(received).toStrictEqual(expected);
  });

})

