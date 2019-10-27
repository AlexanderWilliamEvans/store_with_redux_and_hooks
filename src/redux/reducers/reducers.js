import React from "react";
import { combineReducers } from "redux";
import { MerchandiseReducer } from './MerchandiseReducer';


 function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT_COUNT":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

 function nameReducer(state = { name: "" }, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
    counterReducer,
    nameReducer,
    MerchandiseReducer
  });
  