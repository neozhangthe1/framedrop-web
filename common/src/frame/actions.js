/**
 * Created by yutao on 15/10/6.
 */
import * as api from '../api.js'

export const GET_FRAME = "GET_FRAME";
export const GET_FRAME_SUCCESS = "GET_FRAME_SUCCESS";
export const GET_FRAME_ERROR = "GET_FRAME_ERROR";

export const GET_POI_BY_FRAME = "GET_POI_BY_FRAME";
export const GET_POI_BY_FRAME_SUCCESS = "GET_POI_BY_FRAME_SUCCESS";
export const GET_POI_BY_FRAME_ERROR = "GET_POI_BY_FRAME_ERROR";

export function getFrame(id) {
  return ({fetch}) => ({
    types: [
      GET_FRAME,
      GET_FRAME_SUCCESS,
      GET_FRAME_ERROR
    ],
    payload: {
      promise: api.get(fetch, 'frame/' + id)
    }
  });
}

export function getPoiByFrame(id) {
  return ({fetch}) => ({
    types: [
      GET_POI_BY_FRAME,
      GET_POI_BY_FRAME_SUCCESS,
      GET_POI_BY_FRAME_ERROR
    ],
    payload: {
      promise: api.get(fetch, 'poi/frame/' + id)
    }
  });
}
