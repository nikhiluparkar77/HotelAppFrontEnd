import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "../Admin";
import AdminSignIn from "../AdminAuth/AdminSignIn";
import AdminSignUp from "../AdminAuth/AdminSignUp";
import AdminFooter from "../AdminCommon/AdminFooter";
import AdminHeader from "../AdminCommon/AdminHeader";
import ListOfMessage from "../Contact/ListOfMessage";
import ListOfAdmin from "../ListOfAdmin/ListOfAdmin";
import AdminPrivateRoute from "./AdminPrivateRoute";
 

const AdminRouter = () => {
  return (
    <div className="AdminRouter">
      <Router>
        <AdminHeader />
        <Switch>
          <AdminPrivateRoute path="/admin/message-list" component={ListOfMessage} />
          <AdminPrivateRoute path="/admin/list" component={ListOfAdmin} />
          <AdminPrivateRoute path="/admin/dashboard" component={Admin} />
          <AdminPrivateRoute path="/admin/sign-up" component={AdminSignUp} /> 
          <Route path="/admin/sign-in" component={AdminSignIn} />
          <Route path="/admin" component={AdminSignIn} />
        </Switch>

        <AdminFooter />
      </Router>
    </div>
  );
};

export default AdminRouter;
