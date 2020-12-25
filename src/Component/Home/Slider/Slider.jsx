import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../Image/1.jpg";
import img2 from "../../../Image/2.jpg";
import img3 from "../../../Image/3.jpg";

const Slider = () => {
  return (
    <div className="Slider">
      <div id="HotelSlider" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#HotelSlider" data-slide-to="0" className="active"></li>
          <li data-target="#HotelSlider" data-slide-to="1"></li>
          <li data-target="#HotelSlider" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="SliderPart">
              <img
                src={img1}
                alt="Los Angeles"
                className="img-fluid sliderImg"
              />
              <div className="SliderInfo">
                <h4>Best Hotel In Place</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
                <Link to="/booking" className="btn btn-dark mt-2">Book Now</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="SliderPart">
              <img
                src={img2}
                alt="Los Angeles"
                className="img-fluid sliderImg"
              />
              <div className="SliderInfo">
                <h4>Best Hotel In Place</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
                <Link to="/booking" className="btn btn-dark mt-2">Book Now</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="SliderPart">
              <img
                src={img3}
                alt="Los Angeles"
                className="img-fluid sliderImg"
              />
              <div className="SliderInfo">
                <h4>Best Hotel In Place</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
                <Link to="/booking" className="btn btn-dark mt-2">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#HotelSlider" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#HotelSlider" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
