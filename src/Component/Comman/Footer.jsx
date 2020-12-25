import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const ToDay = new Date();

  return (
    <div className="Footer bg-dark ">
      <div className="container text-white p-5">
        <div className="row">
          <div className="col-lg-5">
            <Link to="/" className="text-white text-decoration-none">
              <h5>Hotel App</h5>
            </Link>
            <p>
              Contrary to popular belief, Lorem Ipsum is not
              <br /> simply random text.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-6">
                <h6>Imp Link</h6>
                <Link
                  to="/about-us"
                  className="text-white text-decoration-none"
                >
                  About
                </Link>
                <br />
                <Link to="/booking" className="text-white text-decoration-none">
                  Booking
                </Link>
                <br />
                <Link to="/service" className="text-white text-decoration-none">
                  Services
                </Link>
                <br />
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact us
                </Link>
              </div>
              <div className="col-lg-6">
                <h6>Helpline</h6>
                <span className="text-white text-decoration-none">
                  Email:- hotel@app.com
                </span>
                <br />
                <span className="text-white text-decoration-none">
                  Phone:- +91 98765 43210
                </span>
                <br />
                <Link
                  to="/contact/#mapBlock"
                  className="text-white text-decoration-none"
                >
                  View Map
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-0 mt-0" />
      <div className="py-4 pt-1 text-center text-light">
        <p className="m-0">&copy; {ToDay.getFullYear()} All Right Reserve.</p>
      </div>
    </div>
  );
};

export default Footer;
