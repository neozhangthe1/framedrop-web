import {combineReducers} from 'redux';

// Reducers
import auth from '../auth/reducer';
import device from '../device/reducer';
import intl from '../intl/reducer';
import todos from '../todos/reducer';
import users from '../users/reducer';
import discover from '../discover/reducer.js';
import poi from '../poi/reducer.js';
import frame from '../frame/reducer.js';
import source from '../source/reducer.js';
import home from '../home/reducer'

const appReducer = combineReducers({
  auth,
  device,
  intl,
  todos,
  users,
  discover,
  poi,
  frame,
  source,
  home
});

export default appReducer;
