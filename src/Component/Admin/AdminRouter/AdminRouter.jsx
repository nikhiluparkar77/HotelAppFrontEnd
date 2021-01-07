import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "../Admin";
import AdminSignIn from "../AdminAuth/AdminSignIn";
import AdminSignUp from "../AdminAuth/AdminSignUp";
import AdminFooter from "../AdminCommon/AdminFooter";
import AdminHeader from "../AdminCommon/AdminHeader";
import AddBooking from "../BookingHotel/AddBooking";
import EditBooking from "../BookingHotel/EditBooking";
import GetBooking from "../BookingHotel/GetBooking";
import ListOfMessage from "../Contact/ListOfMessage";
import ListOfAdmin from "../ListOfAdmin/ListOfAdmin";
import AddSlider from "../Slider/AddSlider";
import EditSlider from "../Slider/EditSlider";
import GetSlider from "../Slider/GetSlider";
import EditTableBooking from "../TableBooking/EditTableBooking";
import GetTableBooking from "../TableBooking/GetTableBooking";
import AdminPrivateRoute from "./AdminPrivateRoute";
 

const AdminRouter = () => {
  return (
    <div className="AdminRouter">
      <Router>
        <AdminHeader />
        <Switch>
          <AdminPrivateRoute path="/admin/table/:tableId" component={EditTableBooking} /> 
          <AdminPrivateRoute path="/admin/table" component={GetTableBooking} /> 
          <AdminPrivateRoute path="/admin/add-slider" component={AddSlider} /> 
          <AdminPrivateRoute path="/admin/slider/:sliderId" component={EditSlider} /> 
          <AdminPrivateRoute path="/admin/slider" component={GetSlider} /> 
          <AdminPrivateRoute path="/admin/add-booking" component={AddBooking} /> 
          <AdminPrivateRoute path="/admin/booking/:bookingId" component={EditBooking} />  
          <AdminPrivateRoute path="/admin/booking" component={GetBooking} />
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
