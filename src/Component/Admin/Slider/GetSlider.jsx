import React,{useEffect,useState} from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { getSliderFunc,deleteSliderFunc } from '../../../Redux/Action/Slider';
import Button from '../../Comman/Feilds/Button';

const GetSlider = ({getSliderFunc,deleteSliderFunc,slider,customprops}) => {
    
    const [SliderState,SetSliderState] = useState([]); 

    useEffect(()=>{
      getSliderFunc();
    },[]);

    useEffect(()=>{
      SetSliderState(slider.getSlider);
    },[slider.getSlider]);


    const DeleteSlider = (id) => {
      const history = customprops.history;
      deleteSliderFunc(id,history);
    }

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
                  <td className="commanBtn"><Link to={`/admin/slider/${item._id}`}><Button value="Edit" /></Link>  <Button value="Delete" onclick={(e)=>DeleteSlider(item._id)} /></td> 
              </tr>
            
            ))
          }
        </>    
      )
    }
    


    return (
        <div className="AdminList commanBlock">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <h4>Slider Info</h4>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/admin/add-slider" className="text-right"><Button value="Add Slider" /></Link>
                    </div>
                </div>
                <hr />
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
    slider:PropTypes.object.isRequired,
    deleteSliderFunc:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    slider:state.slider
})

const mapDispatchToProps = {
    getSliderFunc,
    deleteSliderFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(GetSlider);
