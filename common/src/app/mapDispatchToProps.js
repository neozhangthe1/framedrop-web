import * as authActions from '../auth/actions';
import * as todosActions from '../todos/actions';
import {Map} from 'immutable';
import {bindActionCreators} from 'redux';

import * as discoverActions from '../discover/actions.js';
import * as poiActions from '../poi/actions.js';
import * as frameActions from '../frame/actions.js';
import * as sourceActions from '../source/actions.js';
import * as homeActions from '../home/actions';

const actions = [
  authActions,
  todosActions,
  discoverActions,
  poiActions,
  frameActions,
  sourceActions,
  homeActions
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
