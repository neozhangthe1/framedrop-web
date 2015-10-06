/**
 * Created by yutao on 15/10/5.
 */
import * as api from '../api.js'

export const GET_ITEM = "GET_ITEM";
export const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS";
export const GET_ITEM_ERROR = "GET_ITEM_ERROR";
export const GET_ANSWERS = "GET_ANSWERS";
export const GET_ANSWER_SUCCESS = "GET_ANSWER_SUCCESS";
export const GET_ANSWER_ERROR = "GET_ANSWER_ERROR";

const NUM_DISCOVER_ITEMS = 30;

export function getItem(id) {
  return ({fetch}) => ({
    types: [
      GET_ITEM,
      GET_ITEM_SUCCESS,
      GET_ITEM_ERROR
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
