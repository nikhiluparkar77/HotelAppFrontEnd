import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUserFunc } from '../../Redux/Action/AuthAction';


const Header = ( { logoutUserFunc, auth } ) => {

    const userLogout = () => {
        logoutUserFunc();
    };

    const gestLink = (
        <>
            <li className="nav-item">
                <Link className="nav-link" to="/sign-in">Sign In</Link>
            </li>

        </>
    );

    const userLink = (
        <>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbardrop"
                    data-toggle="dropdown"
                >
                    { " " }
                    <img
                        src={ auth.isAuthenticated.avatar }
                        className="rounded-circle"
                        style={ { width: "25px", marginRight: "5px" } }
                        alt={ auth.isAuthenticated.name }
                    />{ " " }
                    { auth.isAuthenticated.name }
                </a>
                <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/profile">
                        Profile
                    </Link>
                    <Link className="dropdown-item" to="#" onClick={ userLogout }>
                        Logout
                    </Link>

                </div>
            </li>


        </>
    );

    return (
        <div className="Header">
            <nav className="navbar navbar-dark bg-white navbar-expand-sm">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Hotel App
                </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-list-2">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About Us</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/booking">Booking</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/service">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>

                            { auth.isAuthenticated ? userLink : gestLink }


                        </ul>
                    </div>
                </div>



            </nav>
        </div>
    );
};


Header.propTypes = {
    auth: PropTypes.object.isRequired,
    logoutUserFunc: PropTypes.func.isRequired
};


const mapStateToProps = ( state ) => ( {
    auth: state.auth
} );

const mapDispatchToProps = {
    logoutUserFunc
};

export default connect( mapStateToProps, mapDispatchToProps )( Header );
