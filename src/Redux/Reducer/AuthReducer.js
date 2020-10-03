import { CURRENT_USER } from "../Action/Type";

const initalState = {
    isAuthenticated: false,
    user: {}
};

export default function ( state = initalState, action ) {
    switch ( action.type ) {
        case CURRENT_USER:
            return {
                ...state,
                isAuthenticated: action.payload,
                user: action.payload,
            };
        default:
            return state;
    }
}