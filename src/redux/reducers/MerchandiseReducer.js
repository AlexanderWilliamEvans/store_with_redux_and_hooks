import react from 'react';
import * as types from '../actiontypes/actiontypes';
import * as api from '../../api/api';
import { INITIAL_STATE } from '../reducers/Index';


export function MerchandiseReducer(state =INITIAL_STATE, action){
    debugger;
    switch(action.type){
        case types.LIST_MERCHANDISE:
            return(api.fetchMerchandise().then(res =>(
                {
                    ...state,
                    merchandise: res
                }
            )
            ))
       
        case types.FILTER_MERCHANDISE:
            return({
                ...state,

            });

        default:
            return state;
    }

}