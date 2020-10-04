import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
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
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminHeader;
