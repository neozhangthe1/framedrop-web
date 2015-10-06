import {combineReducers} from 'redux';

// Reducers
import auth from '../auth/reducer';
import device from '../device/reducer';
import intl from '../intl/reducer';
import todos from '../todos/reducer';
import users from '../users/reducer';
import discover from '../discover/reducer.js';
import item from '../item/reducer.js';
import frame from '../frame/reducer.js';

const appReducer = combineReducers({
  auth,
  device,
  intl,
  todos,
  users,
  discover,
  item,
  frame
});

export default appReducer;
