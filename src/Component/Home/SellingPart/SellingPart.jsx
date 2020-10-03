import React from "react";
import { Link } from "react-router-dom";
import B1 from "../../../Image/B1.jpg";
import B2 from "../../../Image/B2.jpg";
const SellingPart = () => {
  return (
    <div className="Selling commanBlock BGColor">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3>Best Of Hotel</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-lg-6">
            <div className="card">
              <img className="card-img-top" src={B1} alt="Card image" />
              <div className="card-body">
                <Link className="SellingLink">
                  <div className="row">
                    <div className="col-lg-6">
                      <h5 className="card-title">Rooms Details</h5>
                    </div>
                    <div className="col-lg-6 text-right">
                      <h5 className="card-title">200$</h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <img className="card-img-top" src={B2} alt="Card image" />
              <div className="card-body">
                <Link className="SellingLink">
                  <div className="row">
                    <div className="col-lg-6">
                      <h5 className="card-title">Rooms Details</h5>
                    </div>
                    <div className="col-lg-6 text-right">
                      <h5 className="card-title">250$</h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingPart;
