import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "../About/AboutUs";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import BookingHotel from "../Booking/BookingHotel";
import Footer from "../Comman/Footer";
import Header from "../Comman/Header";
import ContectUs from "../ContectUs/ContectUs";
import HomeComponent from "../HomeComponent";
import ServiceHotel from "../ServiceHotel/ServiceHotel";

const HomeRouter = () => {
  return (
    <div className="HomeRouter">
      <Router>
        <Header />
        <Switch>
          <Route path="/contact" component={ContectUs} />
          <Route path="/service" component={ServiceHotel} />
          <Route path="/booking" component={BookingHotel} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/" component={HomeComponent} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default HomeRouter;
