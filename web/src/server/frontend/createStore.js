import Promise from 'bluebird';
import Todo from '@framedrop/common/src/todos/todo';
import initialState from '../initialState';
import {configureStore} from '@framedrop/common';
import {fromJS} from 'immutable';
import {mapDispatchToProps} from '@framedrop/common';

export default function createStore(req) {
  return new Promise((resolve, reject) => {
    const requestState = fromJS(initialState).mergeDeep({
      device: {
        isMobile: ['phone', 'tablet'].indexOf(req.device.type) > -1
      }
    });
    const store = configureStore(requestState.toJS());
    const {actions} = mapDispatchToProps(store.dispatch);

    actions.addTodo(new Todo({title: 'relax'}));
    resolve(store);
  });
}




