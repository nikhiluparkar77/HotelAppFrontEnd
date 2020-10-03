import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import SongReducer from "./SongReducer";

export default combineReducers( {
    auth: AuthReducer,
    songs: SongReducer
} );