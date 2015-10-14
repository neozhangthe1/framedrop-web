/**
 * Created by yutao on 15/10/5.
 */
import * as api from '../api.js'

export const GET_POI = "GET_POI";
export const GET_POI_SUCCESS = "GET_POI_SUCCESS";
export const GET_POI_ERROR = "GET_POI_ERROR";
export const GET_ANSWERS = "GET_ANSWERS";
export const GET_ANSWER_SUCCESS = "GET_ANSWER_SUCCESS";
export const GET_ANSWER_ERROR = "GET_ANSWER_ERROR";

const NUM_DISCOVER_POIS = 30;

export function getPoi(id) {
  return ({fetch}) => ({
    types: [
      GET_POI,
      GET_POI_SUCCESS,
      GET_POI_ERROR
    ],
    payload: {
      promise: api.get(fetch, 'item/' + id)
    }
  });
}

export function getAnswers(id) {
  return ({fetch}) => ({
    types: [
      GET_ANSWERS,
      GET_ANSWER_SUCCESS,
      GET_ANSWER_ERROR
    ],
    payload: {
      promise: api.get(fetch, 'item/answers/' + id)
    }
  })
}
