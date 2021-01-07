import React,{useEffect,useState} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { AddSliderFunc } from '../../../Redux/Action/Slider';
import TextBox from '../../Comman/Feilds/TextBox';
import Button from '../../Comman/Feilds/Button';


const AddSlider = ({AddSliderFunc,customprops,slider}) => {

    const [StateSlider,SetStateSlider] = useState({
        sliderImg:"",
        sliderHead:"",
        sliderInfo:"", 
    })
    
    
    
    useEffect(()=>{
        SetStateSlider(slider.getSingleSlider);
    },[slider.getSingleSlider]);
  

    const ClickSubmit = (e) => {
        e.preventDefault();
        
        const history = customprops.history;
        const SliderAddData  = { 
            sliderImg:StateSlider.sliderImg,
            sliderHead:StateSlider.sliderHead,
            sliderInfo:StateSlider.sliderInfo
        }
         
        AddSliderFunc(SliderAddData,history);
    }

    
    const HandleChange = (e) => {
        SetStateSlider({
            ...StateSlider,
            [e.target.name] : e.target.value
        })
         
    }


    return (
        <div className="container">
            <div className="AdminComman">
            <h4>Add Slider</h4>
                <hr />
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <form onSubmit={ClickSubmit}>
                             <TextBox
                                label="Slider Img"
                                type="text"
                                name="sliderImg"
                                value={StateSlider.sliderImg} 
                                onChange={HandleChange}
                            />

                            <TextBox
                                label="Slider Head"
                                type="text"
                                name="sliderHead"
                                value={StateSlider.sliderHead} 
                                onChange={HandleChange}
                            />

                            <TextBox
                                label="Slider Info"
                                type="text"
                                name="sliderInfo"
                                value={StateSlider.sliderInfo} 
                                onChange={HandleChange}
                            /> 

                            <Button type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

 

AddSlider.propTypes = {
    AddSliderFunc:PropTypes.func.isRequired, 
    slider:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    slider:state.slider
})

const mapDispatchToProps = {
    AddSliderFunc, 
 
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSlider);
