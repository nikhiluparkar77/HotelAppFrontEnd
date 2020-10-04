import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminSignIn from "../AdminAuth/AdminSignIn";
import AdminSignUp from "../AdminAuth/AdminSignUp";
import AdminFooter from "../AdminCommon/AdminFooter";
import AdminHeader from "../AdminCommon/AdminHeader";

const AdminRouter = () => {
  return (
    <div className="AdminRouter">
      <Router>
        <AdminHeader />
        <Switch>
          <Route path="/admin/sign-in" component={AdminSignIn} />
          <Route path="/admin" component={AdminSignIn} />
        </Switch>
        <AdminFooter />
      </Router>
    </div>
  );
};

export default AdminRouter;
