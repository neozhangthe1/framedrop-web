/**
 * Created by yutao on 15/10/5.
 */

export const get = (fetch, endpoint) =>
  fetch(`http://166.111.7.105:9001/${endpoint}`, {
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
