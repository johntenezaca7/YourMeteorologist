import { PASS_URL } from '../actions/types'

export default function(state = '', action){
    switch(action.type){
        case PASS_URL:
            return action.payload;
        default:
            return state;
    }
}