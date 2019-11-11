import { Action } from "@ngrx/store";
import { initialDirectTreasureState } from "../state/direct-treasure.state";
import { PUBLIC_TITLE_DIRECT_TREASURE } from "../actions/direct-treasure.actions";

export function publicTitleReducer (state = initialDirectTreasureState, action: Action){
  
  switch(action.type){
    case PUBLIC_TITLE_DIRECT_TREASURE: {
      return Object.assign({}, state, action.payload );
    }

    default: return state;
  }

};