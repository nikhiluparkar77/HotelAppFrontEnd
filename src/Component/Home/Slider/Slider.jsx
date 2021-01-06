import React, { useState, useEffect } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types"; 
import { Link } from "react-router-dom"; 
import { getSliderFunc } from "../../../Redux/Action/Slider";

const Slider = ({getSliderFunc,slider}) => {

  const [SliderState,SetSliderState] = useState([]);
 

  useEffect(()=>{
    getSliderFunc();
  },[])
   

  useEffect(()=>{
    SetSliderState(slider.getSlider);
  },[slider.getSlider])

  console.log(SliderState);


let SliderData ;
if(SliderState.length === undefined){
  SliderData = <h4>No Slider Info Avilable</h4>
}else{
  SliderData = (
    <div id="HotelSlider" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
          <li data-target="#HotelSlider" data-slide-to="0" className="active"></li>
          <li data-target="#HotelSlider" data-slide-to="1"></li>
          <li data-target="#HotelSlider" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
      {
        SliderState.map((item,index)=>( 
          
          <div className="carousel-item active">
        
            <div className="SliderPart">
              <img
                src={item.sliderImg}
                alt="Los Angeles"
                className="img-fluid sliderImg"
              />
              <div className="SliderInfo">
                <h4>{item.sliderHead}</h4>
                <p>
                  {item.sliderInfo}
                </p>
                <Link to="/booking" className="btn btn-dark mt-2">Book Now</Link>
              </div>
            </div>
          </div>
            
         
        ))
      }
         </div>
        <a className="carousel-control-prev" href="#HotelSlider" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#HotelSlider" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
  )
}

 
  return (
    <div className="Slider">
      {SliderData}
    </div>
  );
};

Slider.propTypes = {
  getSliderFunc:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  slider:state.slider
})

const mapDispatchToProps = {
  getSliderFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
