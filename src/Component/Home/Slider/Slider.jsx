import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../Image/1.jpg";
import img2 from "../../../Image/2.jpg";
import img3 from "../../../Image/3.jpg";

const Slider = () => {
  return (
    <div className="Slider">
      <div id="HotelSlider" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#HotelSlider" data-slide-to="0" class="active"></li>
          <li data-target="#HotelSlider" data-slide-to="1"></li>
          <li data-target="#HotelSlider" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner">
          <div class="carousel-item active">
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
                <Link className="btn btn-dark mt-2">Book Now</Link>
              </div>
            </div>
          </div>
          <div class="carousel-item">
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
                <Link className="btn btn-dark mt-2">Book Now</Link>
              </div>
            </div>
          </div>
          <div class="carousel-item">
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
                <Link className="btn btn-dark mt-2">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#HotelSlider" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#HotelSlider" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
