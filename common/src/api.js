/**
 * Created by yutao on 15/10/5.
 */

let baseUrl = "http://166.111.7.105:9001/";

export const get = (fetch, endpoint) =>
  fetch(baseUrl + `${endpoint}`, {
    type: "json",
    headers: {
      'Authorization': localStorage.getItem('jwt')
    },
    method: 'get',
    credentials: 'include'
  }).then(resp => {
    if (resp.status === 200) return resp.json();
    throw resp;
  });

export const post = (fetch, endpoint, body) =>
  fetch(baseUrl + `${endpoint}`, {
    type: "json",
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    method: 'post',
    credentials: 'include'
  }).then(response => {
    if (response.status === 200) return response.json();
    throw response;
  });
