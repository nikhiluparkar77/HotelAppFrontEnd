import axios from "axios";
import { SONGS } from "./Type";

export const SongsListFunc = () => ( dispatch ) => {
    axios.get( "http://localhost:5000/api/song/list" )
        .then( ( res ) => dispatch( {
            type: SONGS,
            payload: res.data
        } ) )
        .catch( ( err ) => console.log( err ) );
};