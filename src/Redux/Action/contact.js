import axios from "axios";
import {CONTACT_US} from "./Type";

export const ContactFunction = (contactData,history) => (dispatch) => {
    axios.post("http://localhost:5000/api/conact/",contactData)
        .then((res)=>dispatch({
            type:CONTACT_US,
            payload:res.data
        }),
        history.push("/")
        ).catch((err)=>console.log(err))
}

