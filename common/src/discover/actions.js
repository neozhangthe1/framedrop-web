/**
 * Created by yutao on 15/10/5.
 */
import * as api from '../api.js'

export const GET_DISCOVER_POIS = "GET_DISCOVER_POIS";
export const GET_DISCOVER_POIS_SUCCESS = "GET_DISCOVER_POIS_SUCCESS";
export const GET_DISCOVER_POIS_ERROR = "GET_DISCOVER_POIS_ERROR";

export const GET_DISCOVER_FRAMES = "GET_DISCOVER_FRAMES";
export const GET_DISCOVER_FRAMES_SUCCESS = "GET_DISCOVER_FRAMES_SUCCESS";
export const GET_DISCOVER_FRAMES_ERROR = "GET_DISCOVER_FRAMES_ERROR";


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

export function getDiscoverFrames(offset, size) {
  return ({fetch}) => ({
    types: [
      GET_DISCOVER_FRAMES,
      GET_DISCOVER_FRAMES_SUCCESS,
      GET_DISCOVER_FRAMES_ERROR
    ],
    payload: {
      promise: api.get(fetch, 'discover/frame')
    }
  });
}
