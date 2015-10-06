/**
 * Created by yutao on 15/10/5.
 */
import * as actions from "./actions.js"
import Item from "../item/item.js"
import {List, Range, Record} from 'immutable';
import reqwest from "reqwest";

const InitialState = Record({
  items: List(),
  offset: 0
});
const initialState = new InitialState;

const revive = ({items, offset}) => initialState.merge({
    items: items.map(item => new Item(item)),
    offset: offset
});

export default function discoverReducer(state = initialState, action = null) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.GET_ITEM: {
      return state
    }

    case actions.GET_DISCOVER_ITEMS_SUCCESS: {
      const newItems = action.payload.map(d => Item(d));
      return state
        .set("offset", d => d + newItems.length)
        .update("items", d => d.concat(newItems));
    }

  }

  return state;
}

