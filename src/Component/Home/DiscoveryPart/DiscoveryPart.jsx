import React from "react";
import { Link } from "react-router-dom";
import D1 from "../../../Image/D1.jpg";

const DiscoveryPart = () => {
  return (
    <div className="Disvovery commanBlock BGColor">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3>Discover Hotel In New Path Of City</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center pt-4">
            <img src={D1} className="img-fluid sliderImg" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-12 text-center">
            <Link className="btn btn-outline-dark"> Book Hotel </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryPart;
