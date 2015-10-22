/**
 * Created by yutao on 15/10/5.
 */

let baseUrl = "http://166.111.7.105:9001/";

export const get = (fetch, endpoint) => {
  var jwt = localStorage.getItem('jwt');
  if (!jwt) jwt = "";
  return fetch(baseUrl + `${endpoint}`, {
    type: "json",
    headers: {
      'Authorization': jwt
    },
    method: 'get',
    credentials: 'include'
  }).then(resp => {
    if (resp.status === 200) return resp.json();
    throw resp;
  });
};

export const post = (fetch, endpoint, body) => {
  var jwt = localStorage.getItem('jwt');
  if (!jwt) jwt = "";
  return fetch(baseUrl + `${endpoint}`, {
    type: "json",
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': jwt
    },
    method: 'post',
    credentials: 'include'
  }).then(response => {
    if (response.status === 200) return response.json();
    throw response;
  });
};

