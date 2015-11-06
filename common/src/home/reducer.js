/**
 * Created by yutao on 15/10/6.
 */
import * as actions from "./actions.js"
import Frame from "../frame/frame.js"
import Poi from "../poi/poi.js"
import {List, Range, Record} from 'immutable';

const InitialState = Record({
  frames: []
});
const initialState = new InitialState;

const revive = ({frames}) => initialState.merge({
  frames: frames
});

export default function homeReducer(state = initialState, action = null) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.GET_HEADLINE_SUCCESS: {
      const frames = action.payload.map(d => [Frame(d.frame), d.pois.map(p => Poi(p))]);
      return state.set("frames", frames);
    }

  }

  return state;
}
