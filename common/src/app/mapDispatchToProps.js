import * as authActions from '../auth/actions';
import * as todosActions from '../todos/actions';
import {Map} from 'immutable';
import {bindActionCreators} from 'redux';

import * as discoverActions from '../discover/actions.js';
import * as itemActions from '../item/actions.js';
import * as frameActions from '../frame/actions.js';

const actions = [
  authActions,
  todosActions,
  discoverActions,
  itemActions,
  frameActions
];

export default function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch)
  };
}
