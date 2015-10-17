import * as actions from './actions';
import Form from './form';
import {Record} from 'immutable';

const InitialState = Record({
  login: false
});
const initialState = new InitialState;

export default function authReducer(state = initialState, action = null) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {

    case actions.SET_FORM_FIELD: {
      //const {name, value} = action.payload;
      //return state.setIn(['form', 'fields', name], value);
      return state;
    }

    case actions.LOGIN:
      return state;

    case actions.LOGIN_SUCCESS: {
      if(action.payload.token){
        localStorage.setItem('jwt', action.payload.token);
        localStorage.setItem('username', action.payload.username);
        localStorage.setItem('avatar', action.payload.avatar);
        return state.set("login", true);
      } else {
        return state;
      }
    }

    case actions.LOGIN_ERROR: {
      //const error = action.type === actions.LOGIN_ERROR ? action.payload : null;
      //return state
      //  .setIn(['form', 'disabled'], false)
      //  .setIn(['form', 'error'], error);
      return state;
    }


  }

  return state;
}
