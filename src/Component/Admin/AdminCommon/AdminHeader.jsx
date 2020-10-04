import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { adminLogout } from "../../../Redux/Action/Admin/AuthAdminAction";

const AdminHeader = ({ adminAuth, adminLogout }) => {
  const LogoutAdmin = () => {
    adminLogout();
  };

  const AdminLink = (
    <>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbardrop"
          data-toggle="dropdown"
        >
          Admin
        </a>
        <div className="dropdown-menu">
          <Link className="dropdown-item" to="/admin/sign-up">
            Add New
          </Link>
          <Link className="dropdown-item" to="/admin/list">
            List
          </Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbardrop"
          data-toggle="dropdown"
        >
          {" "}
          <img
            src={adminAuth.isAdmnAuthenticated.avatar}
            className="rounded-circle"
            style={{ width: "25px", marginRight: "5px" }}
            alt={adminAuth.isAdmnAuthenticated.name}
          />{" "}
          {adminAuth.isAdmnAuthenticated.name}
        </a>
        <div className="dropdown-menu">
          <Link className="dropdown-item" to="#" onClick={LogoutAdmin}>
            Logout
          </Link>
        </div>
      </li>
    </>
  );

  return (
    <div className="AdminHeader Header">
      <nav className="navbar navbar-dark bg-white navbar-expand-sm">
        <div className="container">
          <Link className="navbar-brand" to="/admin">
            Admin Panel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-list-2"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-list-2">
            <ul className="navbar-nav ml-auto">
              {adminAuth.isAdmnAuthenticated ? AdminLink : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

AdminHeader.propTypes = {
  adminLogout: PropTypes.func.isRequired,
  adminLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  adminAuth: state.adminAuth,
});

const mapDispatchToProps = {
  adminLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);
