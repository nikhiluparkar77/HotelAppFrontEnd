import React,{useEffect,useState} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { DeleteMessageFunc, GetMessageFunc } from '../../../Redux/Action/contact';
import "../../../Style/AppStyle.css";
import Button from '../../Comman/Feilds/Button';

const ListOfMessage = ({GetMessageFunc,DeleteMessageFunc,contact}) => {
    const [Message,SetMessage] = useState([]);

    useEffect(()=>{
        GetMessageFunc();  
    },[]); 

    useEffect(()=>{  
        SetMessage(contact.getMessage);
    },[contact.getMessage]);


    const DateleMessage = (id) =>{
       DeleteMessageFunc(id);
       SetMessage(contact.getMessage);
    }



    let UpdatedMessage;
    if(Message.length == undefined){
        UpdatedMessage = (
        <tr>
            <td colSpan="6" className="text-center">No Message Found</td>
            </tr>
            )
    }else{
        UpdatedMessage = (
       <>
            {
                 Message.map((item,index)=>(
                    <tr key={index}>
                        <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.message}</td>
                    <td>
                        <Button value="Delete" onclick={(e)=>DateleMessage(item._id)} />
                    </td>
                     
                  </tr>
                ))  
           } 
        </>
        )
    }
    
     
    return (
        <div className="container">
            <div className="AdminComman">
                <h4>Contact Message</h4>
                <hr />
            
             <table className="table table-bordered">
        <thead>
          <tr>
              <th>Sr.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {UpdatedMessage}
        </tbody>
        
      </table>
      </div>
        </div>
    )
}

ListOfMessage.propTypes = {
    adminAuth:PropTypes.object.isRequired,
    contact:PropTypes.object.isRequired,
    GetMessageFunc:PropTypes.func.isRequired,
    DeleteMessageFunc:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    adminAuth:state.adminAuth,
    contact:state.contact
})

const mapDispatchToPeops = {
    GetMessageFunc,
    DeleteMessageFunc
}


export default connect(mapStateToProps,mapDispatchToPeops)(ListOfMessage);
