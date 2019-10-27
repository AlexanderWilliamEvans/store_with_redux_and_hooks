import React from 'react';
import { combineReducers } from "redux";
import { MerchandiseReducer } from './MerchandiseReducer';
import { CartReducer } from './CartReducer';

export const INITIAL_STATE = {
    merchandise: [],
    cart:[],
    filter: false,
    searchParam: '',
}

export const rootReducer = combineReducers({
    MerchandiseReducer,
    CartReducer,
  });