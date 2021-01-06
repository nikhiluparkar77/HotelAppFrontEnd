import React,{useEffect,useState} from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { getSliderFunc } from '../../../Redux/Action/Slider';
import Button from '../../Comman/Feilds/Button';

const GetSlider = ({getSliderFunc,slider}) => {
    
    const [SliderState,SetSliderState] = useState([]); 

    useEffect(()=>{
      getSliderFunc();
    },[]);

    useEffect(()=>{
      SetSliderState(slider.getSlider);
    },[slider.getSlider]);

    let SliderData ;
    if(SliderState.length === undefined){
      SliderData = <tr><td>No Slider Info Avilable</td></tr>
    }else{
      SliderData = (
         <>
          {
            SliderState.map((item,index)=>( 
              <tr key={index}>
                  <td>{index + 1}</td>
                  <td> <img
                    src={item.sliderImg}
                    alt="Los Angeles"
                    className="img-fluid sliderImg commanImage"
                  /></td>
                  <td>{item.sliderHead}</td>
                  <td>{item.sliderInfo}</td>
                  <td className="commanBtn"><Link to={`/admin/booking/${item._id}`}><Button value="Edit" /></Link>  <Button value="Delete" /></td>


              </tr>
            
            ))
          }
        </>    
      )
    }
    


    return (
        <div className="AdminList commanBlock">
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Image Path</th>
                        <th>Heading </th>
                        <th>Info </th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {SliderData}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

GetSlider.propTypes = {
    getSliderFunc:PropTypes.func.isRequired,
    slider:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    slider:state.slider
})

const mapDispatchToProps = {
    getSliderFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(GetSlider);
