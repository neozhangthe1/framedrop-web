/**
 * Created by yutao on 15/10/5.
 */
import * as actions from "./actions.js"
import Poi from "./poi.js"
import Answer from "./answer.js"
import {List, Range, Record} from 'immutable';
import reqwest from "reqwest";

const InitialState = Record({
  poi: new Poi,
  answers: List()
});
const initialState = new InitialState;

const revive = ({poi, answers}) => initialState.merge({
    poi: poi,
    answers: answers.map(answer => new Answer(answer))
});


export default function poiReducer(state = initialState, action = null) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.GET_POI: return state;
    case actions.GET_POI_SUCCESS: {
      return state.set("poi", Poi(action.payload))
    }

    case actions.GET_ANSWERS: return state;
    case actions.GET_ANSWER_SUCCESS: {
      const answers = action.payload.map(d => Answer(d));
      return state.set("answers", answers);
    }
  }

  return state;
}

