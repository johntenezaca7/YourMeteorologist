import { FETCH_USERS_SAVED_INFO } from '../actions/types'

export default function(state= [], action) {
    switch(action.type){
        case FETCH_USERS_SAVED_INFO:
            return action.payload;
        default:
            return state;
    }
}