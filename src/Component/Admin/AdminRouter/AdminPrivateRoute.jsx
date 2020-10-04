import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AdminPrivateRoute = ({ component: Component, adminAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        adminAuth.isAdmnAuthenticated === false ? (
          <Redirect to="/admin/sign-in" />
        ) : (
          <Component customprops={props} {...props} />
        )
      }
    />
  );
};

AdminPrivateRoute.propTypes = {
  adminAuth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  adminAuth: state.adminAuth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPrivateRoute);
