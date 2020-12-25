import {CONTACT_US} from "../Action/Type";

const initalState = {
    contact:{}
}

export default function(state = initalState, action){
    switch(action.type){
        case CONTACT_US:
            return{
                ...state,
                contact:action.payload
            }
            default:
                return state
    }
}