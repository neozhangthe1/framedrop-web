/**
 * Created by yutao on 15/10/5.
 */
import * as api from '../api.js'

export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_USER_INFO_ERROR = "GET_USER_INFO_ERROR";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const SET_FORM_FIELD = 'SET_FORM_FIELD';

const FORM_FIELD_MAX_LENGTH = 100;

const validateForm = (validate, fields) => validate(fields)
  .prop('email').required().email()
  .prop('password').required().simplePassword()
  .promise;

export function setFormField({target: {name, value}}) {
  value = value.slice(0, FORM_FIELD_MAX_LENGTH);
  return {
    type: SET_FORM_FIELD,
    payload: {name, value}
  };
}

export function login(email, password) {
  return ({fetch}) => ({
    types: [
      LOGIN,
      LOGIN_SUCCESS,
      LOGIN_ERROR
    ],
    payload: {
      promise: api.post(fetch, "auth/signin/credentials", {
        identifier: email,
        password: password
      })
    }

  });
}

export function getUserInfo() {
  return ({fetch}) => ({
    types: [
      GET_USER_INFO,
      GET_USER_INFO_SUCCESS,
      GET_USER_INFO_ERROR
    ],
    payload: {
      promise: api.get(fetch, "auth/me")
    }

  });
}
