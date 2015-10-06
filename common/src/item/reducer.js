/**
 * Created by yutao on 15/10/5.
 */
import * as actions from "./actions.js"
import Item from "./item.js"
import Answer from "./answer.js"
import {List, Range, Record} from 'immutable';
import reqwest from "reqwest";

const InitialState = Record({
  item: new Item,
  answers: List()
});
const initialState = new InitialState;

const revive = ({item, answers}) => initialState.merge({
    item: item,
    answers: answers.map(answer => new Answer(answer))
});


export default function itemReducer(state = initialState, action = null) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.GET_ITEM: return state;
    case actions.GET_ITEM_SUCCESS: {
      return state.set("item", Item(action.payload))
    }

    case actions.GET_ANSWERS: return state;
    case actions.GET_ANSWER_SUCCESS: {
      const answers = action.payload.map(d => Answer(d));
      return state.set("answers", answers);
    }
  }

  return state;
}

