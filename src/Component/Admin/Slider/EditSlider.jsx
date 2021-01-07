import React,{useEffect,useState} from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { editSliderFunc,  SingleSliderFunc } from '../../../Redux/Action/Slider';
import Button from '../../Comman/Feilds/Button';
import TextBox from '../../Comman/Feilds/TextBox';

const EditSlider = ({editSliderFunc, SingleSliderFunc,customprops,slider}) => {

    const [StateSlider,SetStateSlider] = useState({
        sliderImg:"",
        sliderHead:"",
        sliderInfo:"",
         
    })
    
    useEffect(()=>{
        SingleSliderFunc(customprops.match.params.sliderId);
    },[])
    
    useEffect(()=>{
        SetStateSlider(slider.getSingleSlider);
    },[slider.getSingleSlider]);
  

    const ClickSubmit = (e) => {
        e.preventDefault();
        const id = customprops.match.params.sliderId;
        const history = customprops.history;
        const SliderEditData  = { 
            sliderImg:StateSlider.sliderImg,
            sliderHead:StateSlider.sliderHead,
            sliderInfo:StateSlider.sliderInfo
        }
         
        editSliderFunc(id,SliderEditData,history);
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
            <h4>Edit Slider Info</h4>
                <hr />
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <form onSubmit={ClickSubmit}>
                             <TextBox
                                label="Room No"
                                type="text"
                                name="sliderImg"
                                value={StateSlider.sliderImg} 
                                onChange={HandleChange}
                            />

                            <TextBox
                                label="Room Image"
                                type="text"
                                name="sliderHead"
                                value={StateSlider.sliderHead} 
                                onChange={HandleChange}
                            />

                            <TextBox
                                label="Heading"
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

 

EditSlider.propTypes = {
    editSliderFunc:PropTypes.func.isRequired,
    SingleSliderFunc:PropTypes.func.isRequired,
    slider:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    slider:state.slider
})

const mapDispatchToProps = {
    editSliderFunc, 
    SingleSliderFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSlider);
