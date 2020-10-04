import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AdminList } from "../../../Redux/Action/Admin/AuthAdminAction";
import Button from "../../Comman/Feilds/Button";

const ListOfAdmin = ({ adminAuth, AdminList }) => {
  const [ListAdmin, SetListAdmin] = useState([]);

  useEffect(() => {
    AdminList();
  }, []);

  console.log(adminAuth.listOfAdmin);

  let NewData;

  return (
    <div className="AdminList commanBlock">
      <div className="container">
        <h4>List Of Admin</h4>
        <hr />
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
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
              <td>
                <Button value="Delete" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

ListOfAdmin.propTypes = {
  adminAuth: PropTypes.object.isRequired,
  AdminList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  adminAuth: state.adminAuth,
});

const mapDispatchToProps = {
  AdminList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfAdmin);
