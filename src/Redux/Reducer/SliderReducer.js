import { GET_SLIDER } from "../Action/Type"

const initalState = {
    getSlider:{},
}

export default function(state = initalState,action){
    switch(action.type){
        case GET_SLIDER : 
        return{
            ...state,
            getSlider:action.payload
        }
        default:
            return state

    }    
} 