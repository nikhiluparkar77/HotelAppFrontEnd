import axios from "axios";
import { GET_SLIDER, GET_SINGLE_SLIDER,ADD_SLIDER } from "./Type";

// Get All Slider
export const getSliderFunc = () => (dispatch) => {
    axios
        .get("http://localhost:5000/api/slider/")
        .then((res) => dispatch({
            type:GET_SLIDER,
            payload:res.data
        }))
        .catch((err) => console.log(err))
}


// Get Slingle Slider using Id
export const SingleSliderFunc = (id) => (dispatch) => {
    axios
        .get(`http://localhost:5000/api/slider/${id}`)
        .then((res) => dispatch({
            type:GET_SINGLE_SLIDER,
            payload:res.data
        }))
        .catch((err) => console.log(err))
}


// Edit Slingle Slider using Id
export const editSliderFunc = (id,SliderEditData,history) => (dispatch) => {
    axios
        .patch(`http://localhost:5000/api/slider/${id}`, SliderEditData)
        .then((res) => dispatch({
            type:GET_SINGLE_SLIDER,
            payload:res.data
        }),
        history.push("/admin/dashboard")
        
        )
        .catch((err) => console.log(err))
}

// Edit Slingle Slider using Id
export const AddSliderFunc = (SliderAddData,history) => (dispatch) => {
    axios
        .post("http://localhost:5000/api/slider/", SliderAddData)
        .then((res) => dispatch({
            type:ADD_SLIDER,
            payload:res.data
        }),
        history.push("/admin/dashboard")
        
        )
        .catch((err) => console.log(err))
}

// Delete Slingle Slider using Id
export const deleteSliderFunc = (id,history) => (dispatch) => {
    axios
        .delete(`http://localhost:5000/api/slider/${id}`)
        .then((res) => dispatch({
            type:GET_SLIDER,
            payload:res.data
        }),
        history.push("/admin/dashboard")
        )
        .catch((err) => console.log(err))
}