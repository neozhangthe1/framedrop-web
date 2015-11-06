/**
 * Created by yutao on 15/10/6.
 */
import * as api from '../api.js'

export const GET_HEADLINE = "GET_HEADLINE";
export const GET_HEADLINE_SUCCESS = "GET_HEADLINE_SUCCESS";
export const GET_HEADLINE_ERROR = "GET_HEADLINE_ERROR";



export function getHeadline() {
  return ({fetch}) => ({
    types: [
      GET_HEADLINE,
      GET_HEADLINE_SUCCESS,
      GET_HEADLINE_ERROR
    ],
    payload: {
      promise: api.get(fetch, 'headline')
    }
  });
}


