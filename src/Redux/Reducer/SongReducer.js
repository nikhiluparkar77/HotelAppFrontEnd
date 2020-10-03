import { SONGS } from "../Action/Type";

const initalState = {
    songs: {}
};

export default function ( state = initalState, action ) {
    switch ( action.type ) {
        case SONGS:
            return {
                ...state,
                songs: action.payload
            };
        default:
            return state;
    }
}
