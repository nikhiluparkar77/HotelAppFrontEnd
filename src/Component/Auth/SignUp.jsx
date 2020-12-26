import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";
import TextBox from '../Comman/Feilds/TextBox';
import Button from '../Comman/Feilds/Button';
import { SignUpFunc } from "../../Redux/Action/AuthAction";


const SignUp = ( { SignUpFunc } ) => {
    const history = useHistory();
    const [ State, SetState ] = useState( {
        name: "",
        email: "",
        password: ""
    } );

    const OnSubmit = ( e ) => {
        e.preventDefault();
        const SignUpData = {
            name: State.name,
            email: State.email,
            password: State.password
        };
        SignUpFunc( SignUpData, history );
    };

    const OnChange = ( e ) => {
        SetState( {
            ...State,
            [ e.target.name ]: e.target.value
        } );
    };



    return (
        <div className="SignUp SignClass">
            <div className="row">
                <div className="col-lg-4 m-auto">
                    <div className="card my-5 mt-5">
                        <div className="card-body">
                            <h4 className="card-title">Sign Up</h4>
                            <hr />
                            <form onSubmit={ OnSubmit }>
                                <TextBox label="Name" type="text" name="name" onChange={ OnChange } value={ State.name } />
                                <TextBox label="Email" type="text" name="email" onChange={ OnChange } value={ State.email } />
                                <TextBox label="Password" type="password" name="password" onChange={ OnChange } value={ State.password } />
                                <hr />
                                <Button type="submit" value="Sign Up" />
                                <Link to="sign-in" className="btn btn-outline-dark float-right">Sign In</Link>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


SignUp.propTypes = {
    SignUpFunc: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    SignUpFunc
};


export default connect( null, mapDispatchToProps )( SignUp );







