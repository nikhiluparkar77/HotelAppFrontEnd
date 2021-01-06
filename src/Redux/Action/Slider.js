import axios from "axios";
import { GET_SLIDER } from "./Type";

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
export const SingleSliderFunc = (id,history) => (dispatch) => {
    axios
        .get(`http://localhost:5000/api/slider/`)
        .then((res) => dispatch({
            type:GET_SLIDER,
            payload:res.data
        }))
        .catch((err) => console.log(err))
}


// Edit Slingle Slider using Id
export const editSliderFunc = (id,history) => (dispatch) => {
    axios
        .patch(`http://localhost:5000/api/slider/`)
        .then((res) => dispatch({
            type:GET_SLIDER,
            payload:res.data
        }))
        .catch((err) => console.log(err))
}

// Delete Slingle Slider using Id
export const deleteSliderFunc = (id,history) => (dispatch) => {
    axios
        .delete(`http://localhost:5000/api/slider/`)
        .then((res) => dispatch({
            type:GET_SLIDER,
            payload:res.data
        }))
        .catch((err) => console.log(err))
}