import axios from "axios";
import jwt_decode from "jwt-decode";
import { CURRENT_USER } from "./Type";
import setAuthToken from "../../Component/SetAuth/setAuthToken";

// Sign UP
export const SignUpFunc = ( SignUpData, history ) => ( dispatch ) => {

    axios.post( "http://localhost:5000/api/user/signup", SignUpData )
        .then( ( res ) => dispatch( {
            type: CURRENT_USER,
            payload: res.data
        } ), history.push( "/sign-in" ) )
        .catch( ( err ) => console.log( err ) );
};

// Sign IN
export const SignInFunc = ( SignInData, history ) => ( dispatch ) => {

    axios.post( "http://localhost:5000/api/user/signin", SignInData )
        .then( ( res ) => {
            const { token } = res.data;
            localStorage.setItem( "jwtToken", token );
            setAuthToken( token );
            const decoded = jwt_decode( token );
            console.log( token );
            dispatch( setCurrentUser( decoded ) );
        } ).catch( ( err ) => console.log( err ) );
};

export const setCurrentUser = ( decoded ) => {
    return {
        type: CURRENT_USER,
        payload: decoded
    };
};

// Logout User
export const logoutUserFunc = () => ( dispatch ) => {
    localStorage.removeItem( "jwtToken" );
    setAuthToken( false );
    dispatch( setCurrentUser( false ) );
};