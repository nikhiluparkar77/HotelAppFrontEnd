import { GET_SLIDER, GET_SINGLE_SLIDER,ADD_SLIDER } from "../Action/Type"

const initalState = {
    getSlider:{},
    getSingleSlider:{},
    addSlider:{}
}

export default function(state = initalState,action){
    switch(action.type){
        case GET_SLIDER : 
        return{
            ...state,
            getSlider:action.payload
        }
        case GET_SINGLE_SLIDER : 
        return{
            ...state,
            getSingleSlider:action.payload
        }
        case ADD_SLIDER : 
        return{
            ...state,
            addSlider:action.payload
        }
        default:
            return state

    }    
} 