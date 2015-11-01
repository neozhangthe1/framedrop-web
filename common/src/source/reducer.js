/**
 * Created by yutao on 15/10/5.
 */
import * as actions from "./actions.js"
import Poi from "../poi/poi.js"
import Frame from "../frame/frame.js"
import {List, Range, Record} from 'immutable';

const InitialState = Record({
  pois: List(),
  frames: List(),
  offset: 0
});
const initialState = new InitialState;

const revive = ({pois, frames, offset}) => initialState.merge({
    frames: frames.map(item => new Frame(item)),
    pois: pois.map(item => new Poi(item)),
    offset: offset
});

export default function sourceReducer(state = initialState, action = null) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.GET_SOURCE_POIS: {
      return state
    }

    case actions.GET_SOURCE_POIS_SUCCESS: {
      const newItems = action.payload.map(d => Poi(d));
      return state
        .update("pois", d => d.concat(newItems));
    }

    case actions.GET_SOURCE_FRAMES_SUCCESS: {
      const newItems = action.payload.map(d => Frame(d));
      return state
        .update("frames", d => d.concat(newItems));
    }


  }

  return state;
}

