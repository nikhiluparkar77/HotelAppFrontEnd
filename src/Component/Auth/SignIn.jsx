import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";
import TextBox from '../Comman/Feilds/TextBox';
import Button from '../Comman/Feilds/Button';
import { SignInFunc } from "../../Redux/Action/AuthAction";

const SignIn = ( { SignInFunc, auth } ) => {

    const history = useHistory();
    const [ State, SetState ] = useState( {
        email: "",
        password: ""
    } );

    const OnSubimit = ( e ) => {
        e.preventDefault();
        const SignInData = {
            email: State.email,
            password: State.password
        };
        SignInFunc( SignInData, history );
    };

    const OnChange = ( e ) => {
        SetState( {
            ...State,
            [ e.target.name ]: e.target.value
        } );
    };


    useEffect( () => {
        if ( auth.isAuthenticated ) {
            history.push( "/" );
        }
    }, [] );


    return (
        <div className="SignIn SignClass">
            <div className="row">
                <div className="col-lg-4 m-auto">
                    <div className="card my-5 mt-5">
                        <div className="card-body">
                            <h4 className="card-title">Sign In</h4>
                            <hr />
                            <form onSubmit={ OnSubimit }>
                                <TextBox label="Email" type="text" name="email" value={ State.email } onChange={ OnChange } />
                                <TextBox label="Password" type="password" name="password" value={ State.password } onChange={ OnChange } />
                                <hr />
                                <Button type="submit" value="Sign In" />

                                <Link to="sign-up" className="btn btn-outline-dark float-right">Sign Up</Link>
                            </form>

                        </div>




                    </div>

                </div>
            </div>
        </div>
    );
};

SignIn.propTypes = {
    SignInFunc: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = ( state ) => ( {
    auth: state.auth
} );

const mapDispatchToProps = {
    SignInFunc
};

export default connect( mapStateToProps, mapDispatchToProps )( SignIn );