/**
 * Created by yutao on 15/10/5.
 */
import * as api from '../api.js'

export const GET_DISCOVER_ITEMS = "GET_DISCOVER_ITEMS";
export const GET_DISCOVER_ITEMS_SUCCESS = "GET_DISCOVER_ITEMS_SUCCESS";
export const GET_DISCOVER_ITEMS_ERROR = "GET_DISCOVER_ITEMS_ERROR";

const NUM_DISCOVER_ITEMS = 30;

export function getDiscoverItems(offset, size) {
  return ({fetch}) => ({
    types: [
      GET_DISCOVER_ITEMS,
      GET_DISCOVER_ITEMS_SUCCESS,
      GET_DISCOVER_ITEMS_ERROR
    ],
    payload: {
      promise: api.get(fetch, 'discover')
    }
  });
}
