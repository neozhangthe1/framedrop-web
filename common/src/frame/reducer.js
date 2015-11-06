/**
 * Created by yutao on 15/10/6.
 */
import * as actions from "./actions.js"
import Frame from "../frame/frame.js"
import Poi from "../poi/poi.js"
import {List, Range, Record} from 'immutable';

const InitialState = Record({
  frame: new Frame,
  pois: new List()
});
const initialState = new InitialState;

const revive = ({frame, pois}) => initialState.merge({
  frame: frame,
  pois: pois.map(p => new Poi(p))
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

    case actions.GET_POI_BY_FRAME: {
      return state
    }

    case actions.GET_POI_BY_FRAME_SUCCESS: {
      const pois = action.payload.map(d => Poi(d));
      return state.set("pois", pois);
    }

  }

  return state;
}
