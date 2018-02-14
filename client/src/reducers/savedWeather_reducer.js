import { FETCHED_SAVED_WEATHER } from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case FETCHED_SAVED_WEATHER:
            return [ action.payload.data, ...state ];
        default:
            return state;
    }
}