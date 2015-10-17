import * as authActions from '../auth/actions';
import User from './user';
import {Record} from 'immutable';

const InitialState = Record({
  viewer: null
});
const initialState = new InitialState;

function revive({viewer}) {
  return initialState.merge({
    // Handle user authenticated on the server.
    viewer: viewer ? new User(viewer) : null
  });
}

export default function usersReducer(state = initialState, action = null) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case authActions.LOGIN_SUCCESS: {
      const {username, avatar} = action.payload;
      return state.set('viewer', new User({username, avatar}));
    }

  }

  return state;
}
