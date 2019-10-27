import react from 'react';
import * as types from '../actiontypes/actiontypes';
import * as api from '../../api/api';
import { INITIAL_STATE } from '../reducers/Index';



export function CartReducer(state =INITIAL_STATE, action){
    debugger;
    switch(action.type){
        case types.LIST_CART:
            return(api.fetchMerchandise().then(res =>(
                {
                    ...state,
                    merchandise: res
                }
            )
            ))
       
        case types.ADD_TO_CART:
            return({
                ...state,

            });

        case types.REMOVE_FROM_CART:
        return({
            ...state,

        });

        case types.CLEAR_CART:
            return({
                ...state,

        });
        default:
            return state;
    }

}