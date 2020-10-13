import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import {
  AdminList,
  AdminDelete,
} from "../../../Redux/Action/Admin/AuthAdminAction";
import Button from "../../Comman/Feilds/Button";

const ListOfAdmin = ({ adminAuth, AdminList, AdminDelete, customprops }) => {
  const [ListAdmin, SetListAdmin] = useState([]);

  useEffect(() => {
    AdminList();
  }, []);

  useEffect(() => {
    SetListAdmin(adminAuth.listOfAdmin);
  }, [adminAuth.listOfAdmin]);

  const HandleDelete = (id) => {
    AdminDelete(id, customprops.history);
  };

  // useEffect(() => {
  //   SetListAdmin(adminAuth.listOfAdmin);
  // }, []);

  let AdminData;
  if (ListAdmin == undefined) {
    AdminData = <h4>No Admin Avilable</h4>;
  } else {
    AdminData = (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ListAdmin.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Moment format="YYYY/MM/DD">{item.date}</Moment>
              </td>
              <td>
                <Button
                  value="Delete"
                  onclick={(e) => {
                    HandleDelete(item._id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div className="AdminList commanBlock">
      <div className="container">
        <h4>List Of Admin</h4>
        <hr />
        {AdminData}
      </div>
    </div>
  );
};

ListOfAdmin.propTypes = {
  adminAuth: PropTypes.object.isRequired,
  AdminList: PropTypes.func.isRequired,
  AdminDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  adminAuth: state.adminAuth,
});

const mapDispatchToProps = {
  AdminList,
  AdminDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfAdmin);
