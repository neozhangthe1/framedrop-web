/**
 * Created by yutao on 15/10/6.
 */
import * as actions from "./actions.js"
import Frame from "../frame/frame.js"
import {List, Range, Record} from 'immutable';

const InitialState = Record({
  frame: new Frame
});
const initialState = new InitialState;

const revive = ({frame}) => initialState.merge({
  frame: new Frame(frame)
});

export default function frameReducer(state = initialState, action = null) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.GET_FRAME: {
      return state
    }

    case actions.GET_FRAME_SUCCESS: {
      return state.set("frame", Frame(action.payload))
    }

  }

  return state;
}
