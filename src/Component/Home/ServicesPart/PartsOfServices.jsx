import React from "react";
import { Link } from "react-router-dom";
import s1 from "../../../Image/s1.jpg";
import s2 from "../../../Image/s2.jpg";
import s3 from "../../../Image/s3.jpg";

const PartsOfServices = () => {
  return (
    <div className="ServicePart p-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <img className="card-img-top" src={s1} alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">Spa</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum available
                </p>
                <Link className="BtnLink"> Read More... </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img className="card-img-top" src={s2} alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">Outdoor Restaurant</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum available
                </p>
                <Link className="BtnLink"> Read More... </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img className="card-img-top" src={s3} alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">Poolside Bar</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum available
                </p>
                <Link className="BtnLink"> Read More... </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-12 text-center">
            <Link className="btn btn-outline-dark"> View More </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsOfServices;
