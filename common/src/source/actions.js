/**
 * Created by yutao on 15/10/5.
 */
import * as api from '../api.js'

export const GET_SOURCE_POIS = "GET_SOURCE_POIS";
export const GET_SOURCE_POIS_SUCCESS = "GET_SOURCE_POIS_SUCCESS";
export const GET_SOURCE_POIS_ERROR = "GET_SOURCE_POIS_ERROR";

const NUM_SOURCE_POIS = 30;

export function getPoiBySource(sid) {
  return ({fetch}) => ({
    types: [
      GET_SOURCE_POIS,
      GET_SOURCE_POIS_SUCCESS,
      GET_SOURCE_POIS_ERROR
    ],
    payload: {
      promise: api.get(fetch, 'items/source/' + sid)
    }
  });
}
