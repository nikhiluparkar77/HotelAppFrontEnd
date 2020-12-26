import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import TextBox from "../../Comman/Feilds/TextBox";
import Button from "../../Comman/Feilds/Button";
import { FuncAdminSignIn } from "../../../Redux/Action/Admin/AuthAdminAction";

const AdminSignIn = ({ FuncAdminSignIn, adminAuth }) => {
  const history = useHistory();
  const [State, SetState] = useState({
    email: "",
    password: "",
  });


  useEffect(() => {
    if (adminAuth.isAdmnAuthenticated) {
      history.push("/admin/dashboard");
    }
  }, []);

  const OnSubimit = (e) => {
    e.preventDefault();
    const AdminSignInData = {
      email: State.email,
      password: State.password,
    };
    FuncAdminSignIn(AdminSignInData, history);
  };

  const OnChange = (e) => {
    SetState({
      ...State,
      [e.target.name]: e.target.value,
    });
  };

 

  return (
    <div className="SignIn SignClass">
      <div className="row">
        <div className="col-lg-4 m-auto">
          <div className="card my-5 mt-5">
            <div className="card-body">
              <h4 className="card-title">Admin Sign In</h4>
              <hr />
              <form onSubmit={OnSubimit}>
                <TextBox
                  label="Email"
                  type="text"
                  name="email"
                  value={State.email}
                  onChange={OnChange}
                />
                <TextBox
                  label="Password"
                  type="password"
                  name="password"
                  value={State.password}
                  onChange={OnChange}
                />
                <hr />
                <Button type="submit" value="Sign In" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AdminSignIn.propTypes = {
  FuncAdminSignIn: PropTypes.func.isRequired,
  adminAuth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  adminAuth: state.adminAuth,
});

const mapDispatchToProps = { FuncAdminSignIn };

export default connect(mapStateToProps, mapDispatchToProps)(AdminSignIn);
