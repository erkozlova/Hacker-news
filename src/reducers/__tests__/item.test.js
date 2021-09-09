import { item, initialState } from '../item';
import {
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILED,
  GET_ITEM_COMMENTS_REQUEST,
  GET_ITEM_COMMENTS_SUCCESS,
  GET_ITEM_COMMENTS_FAILED
} from '../../constants';

describe('Item reducer', () => {
  it('should handle request', () => {
    const action = { type: GET_ITEM_REQUEST };
    const expected = { data: {}, isLoading: true };
    const received = item({...initialState}, action);
    expect(received).toStrictEqual(expected);
  });

  it('should handle success', () => {
    const action = { payload: {name: 'Jhon', age: '15'}, type: GET_ITEM_SUCCESS };
    const expected = { data: {name: 'Jhon', age: '15'}, isLoading: false };
    const received = item({...initialState, isLoading: true}, action);
    expect(received).toStrictEqual(expected);
  });

  it('should handle fail', () => {
    const action = { type: GET_ITEM_FAILED };
    const expected = { data: {}, isLoading: false };
    const received = item({...initialState, data: {name: 'Jhon', age: '15'}, isLoading: true}, action);
    expect(received).toStrictEqual(expected);
  });

  it('should handle item comments request', () => {
    const action = { type: GET_ITEM_COMMENTS_REQUEST };
    const expected = { data: {}, isLoading: true };
    const received = item({...initialState}, action);
    expect(received).toStrictEqual(expected);
  });

  it('should handle item comments success', () => {
    const action = { payload: {name: 'Jhon', age: '15'}, type: GET_ITEM_COMMENTS_SUCCESS };
    const expected = { data: {name: 'Jhon', age: '15'}, isLoading: false };
    const received = item({...initialState, isLoading: true}, action);
    expect(received).toStrictEqual(expected);
  });

  it('should handle item comments fail', () => {
    const action = { type: GET_ITEM_COMMENTS_FAILED };
    const expected = { data: {}, isLoading: false };
    const received = item({...initialState, isLoading: true}, action);
    expect(received).toStrictEqual(expected);
  });
})