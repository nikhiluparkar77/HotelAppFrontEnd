import React from "react";
import { Link } from "react-router-dom";
import Button from "../Comman/Feilds/Button";
import "../../Style/AppStyle.css";

const Admin = () => {
  return (
    <div className="container">
      <div className="AdminComman">
      <h1>Dashboard</h1>
      <hr />
      <Link to="/admin/message-list"><Button value="Contact Message" /></Link>
      </div>
    </div>
  );
};

export default Admin;
