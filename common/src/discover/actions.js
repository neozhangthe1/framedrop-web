/**
 * Created by yutao on 15/10/5.
 */
import * as api from '../api.js'

export const GET_DISCOVER_POIS = "GET_DISCOVER_POIS";
export const GET_DISCOVER_POIS_SUCCESS = "GET_DISCOVER_POIS_SUCCESS";
export const GET_DISCOVER_POIS_ERROR = "GET_DISCOVER_POIS_ERROR";

const NUM_DISCOVER_POIS = 30;

export function getDiscoverPois(offset, size) {
  return ({fetch}) => ({
    types: [
      GET_DISCOVER_POIS,
      GET_DISCOVER_POIS_SUCCESS,
      GET_DISCOVER_POIS_ERROR
    ],
    payload: {
      promise: api.get(fetch, 'discover')
    }
  });
}
