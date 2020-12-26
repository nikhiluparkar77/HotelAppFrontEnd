import {CONTACT_US,CONTACT_MESSAGE} from "../Action/Type";

const initalState = {
    contact:{},
    getMessage:{}
}

export default function(state = initalState, action){
    switch(action.type){
        case CONTACT_US:
            return{
                ...state,
                contact:action.payload
            }
            case CONTACT_MESSAGE:
            return{
                ...state,
                getMessage:action.payload
            }
            default:
                return state
    }
}