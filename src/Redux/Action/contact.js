import axios from "axios";
import {CONTACT_MESSAGE, CONTACT_US} from "./Type";

export const ContactFunction = (contactData,history) => (dispatch) => {
    axios.post("http://localhost:5000/api/conact/",contactData)
        .then((res)=>dispatch({
            type:CONTACT_US,
            payload:res.data
        }),
        history.push("/")
        ).catch((err)=>console.log(err))
}


export const GetMessageFunc = () =>(dispatch) => {
    axios.get("http://localhost:5000/api/conact/")
        .then((res)=>dispatch({
            type:CONTACT_MESSAGE,
            payload:res.data
        })).catch((err)=>console.log(err))
}


export const DeleteMessageFunc = (id) => (dispatch) =>{
    axios.delete(`http://localhost:5000/api/conact/${id}`)
        .then((res)=>dispatch({
            type:CONTACT_MESSAGE,
            payload:res.data
        })).catch((err)=>console.log(err))
     
}