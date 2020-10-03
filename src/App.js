import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";
import store from './Redux/Store';
import { Container } from "react-bootstrap";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style/AppStyle.css";

import setAuthToken from './Component/SetAuth/setAuthToken';
import { setCurrentUser } from './Redux/Action/AuthAction';

import HomeComponent from './Component/HomeComponent';
import Header from './Component/Comman/Header';
import Footer from './Component/Comman/Footer';
import SignIn from './Component/Auth/SignIn';
import SignUp from './Component/Auth/SignUp';
import AboutUs from './Component/About/AboutUs';
import BookingHotel from './Component/Booking/BookingHotel';
import ServiceHotel from './Component/ServiceHotel/ServiceHotel';
import ContectUs from './Component/ContectUs/ContectUs';



if ( localStorage.jwtToken ) {
  setAuthToken( localStorage.jwtToken );
  const decoded = jwt_decode( localStorage.jwtToken );
  store.dispatch( setCurrentUser( decoded ) );
  const currentTime = Date.now() / 1000;
  if ( decoded.exp < currentTime ) {
    localStorage.removeItem( "jwtToken" );
    window.location = "/sign-in";
  }
}




function App() {
  return (
    <div className="App">

      <Provider store={ store }>
        <Router >
          <Header />
          <Switch>
            <Route path="/contact" component={ ContectUs } />
            <Route path="/service" component={ ServiceHotel } />
            <Route path="/booking" component={ BookingHotel } />
            <Route path="/about-us" component={ AboutUs } />
            <Route path="/sign-up" component={ SignUp } />
            <Route path="/sign-in" component={ SignIn } />
            <Route path="/" component={ HomeComponent } />
          </Switch>
          <Footer />
        </Router>
      </Provider>

    </div>
  );
}

export default App;
