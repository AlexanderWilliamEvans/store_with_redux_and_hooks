import react from 'react';
import { LIST_MERCHANDISE, SEARCH_IN_MERCHANDISE, FILTER_MERCHANDISE } from '../actiontypes/actiontypes';


export function MerchandiseReducer(state, action){
    switch(action.type){
        case 'LIST_MERCHANDISE':
            return({
                ...state,
                merchandise:action
            });
    }

}