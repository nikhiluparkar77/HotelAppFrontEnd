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
      <div className="row">
        <div className="col-lg-3">
        <Link to="/admin/message-list"><Button value="Contact Message" /></Link>
        </div>
        <div className="col-lg-3">
        <Link to="/admin/booking"><Button value="Booking Info" /></Link>
        </div>
        <div className="col-lg-3">
        <Link to="/admin/slider"><Button value="Slider Info" /></Link>
        </div>
        <div className="col-lg-3">
        <Link to="/admin/table"><Button value="Table Book Info" /></Link>
        </div>
      </div>  
      </div>
    </div>
  );
};

export default Admin;
