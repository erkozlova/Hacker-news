import { comments, initialState } from '../comments';
import { 
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILED
} from '../../constants';

describe('Comments reducer', () => {
  it('should handle comments request', () => {
    const action = {type: GET_COMMENTS_REQUEST};
    const expected = { data: {}, isLoading: true };
    const received = comments({...initialState}, action);
    expect(received).toStrictEqual(expected);
  });
  
  it('should handle comments success without path', () => {
    const action = {payload: {data: {name: 'Jhon', age: '15'}, path: []}, type: GET_COMMENTS_SUCCESS};
    const expected = { data: {name: 'Jhon', age: '15'}, isLoading: false };
    const received = comments({...initialState, isLoading: true}, action);
    expect(received).toStrictEqual(expected);
  });

  it('should handle comments success path with length 1', () => {
    const action = {payload: {data: {2: {}}, path: [1]}, type: GET_COMMENTS_SUCCESS};
    const expected = { data: {1: {comments: {2: {}}}}, isLoading: false };
    const received = comments({...initialState, data: {1: {comments: {}}}, isLoading: true}, action);
    expect(received).toStrictEqual(expected);
  });

  it('should handle comments success path with length more 1', () => {
    const action = {payload: {data: {3:{}}, path: [1, 2]}, type: GET_COMMENTS_SUCCESS};
    const expected = { data: {1: {comments: {2: {comments: {3: {}}}}}}, isLoading: false };
    const received = comments({...initialState, data: {1: {comments: {2: {comments: {}}}}}, isLoading: true}, action);
    expect(received).toStrictEqual(expected);
  });

  it('should handle comments fail', () => {
    const action = {type: GET_COMMENTS_FAILED};
    const expected = { data: {}, isLoading: false };
    const received = comments({...initialState, isLoading: true}, action);
    expect(received).toStrictEqual(expected);
  });
})
