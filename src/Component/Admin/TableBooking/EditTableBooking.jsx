import React,{useEffect,useState} from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"; 
import Button from '../../Comman/Feilds/Button';
import TextBox from '../../Comman/Feilds/TextBox';
import { EditTableFunc, GetSingleTableFunc } from '../../../Redux/Action/Admin/AuthAdminAction';

const EditTableBooking = ({customprops,GetSingleTableFunc,EditTableFunc,adminAuth}) => {

    const [StateTable,SetStateTable] = useState({
        name:"",
        email:"",
        mobileNo:"",
        tableNo:"",
        date:"",
        booked:""
    })
    

    useEffect(()=>{
        GetSingleTableFunc(customprops.match.params.tableId);
    },[])
    
    useEffect(()=>{
        SetStateTable(adminAuth.singleTable);
    },[adminAuth]);

    const ClickSubmit = (e) => {
        e.preventDefault();
        const id = customprops.match.params.tableId;
        const history = customprops.history;
        const TableEditData  = { 
            name:StateTable.name,
            email:StateTable.email,
            mobileNo:StateTable.mobileNo,
            tableNo:StateTable.tableNo,
            date:StateTable.date,
            booked:StateTable.booked
        }
        EditTableFunc(id,TableEditData,history); 
    }

    const HandleChange = (e) => {
        SetStateTable({
            ...StateTable,
            [e.target.name] : e.target.value
        })
         
    }


    return (
        <div className="container">
        <div className="AdminComman">
        <h4>Table Booking Info</h4>
            <hr />
            <div className="row">
                <div className="col-lg-12">
                    <form onSubmit={ClickSubmit}>
                        <div className="row">
                            <div className="col-lg-6">
                                <TextBox
                                    label="Name"
                                    type="text"
                                    name="name"
                                    value={StateTable.name} 
                                    onChange={HandleChange}
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextBox
                                    label="Email"
                                    type="text"
                                    name="email"
                                    value={StateTable.email} 
                                    onChange={HandleChange}
                                />
                            </div>
                            <div className="col-lg-6">
                                <TextBox
                                    label="Mobile No."
                                    type="text"
                                    name="mobileNo"
                                    value={StateTable.mobileNo} 
                                    onChange={HandleChange}
                                />
                            </div>
                            <div className="col-lg-6"> 
                                <TextBox
                                    label="Table No."
                                    type="text"
                                    name="tableNo"
                                    value={StateTable.tableNo} 
                                    onChange={HandleChange}
                                />
                            </div>

                            <div className="col-lg-6"> 
                                <TextBox
                                    label="Date"
                                    type="date"
                                    name="date"
                                    value={StateTable.date} 
                                    onChange={HandleChange}
                                />
                            </div>

                            <div className="col-lg-6"> 
                                <TextBox
                                    label="Avilable"
                                    type="text"
                                    name="booked"
                                    value={StateTable.booked} 
                                    onChange={HandleChange}
                                />
                            </div>
                        </div>  

                        <Button type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

EditTableBooking.propTypes = {
    GetSingleTableFunc:PropTypes.func.isRequired,
    EditTableFunc:PropTypes.func.isRequired,
    adminAuth:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    adminAuth:state.adminAuth
})

const mapDispatchToProps = {
    GetSingleTableFunc,
    EditTableFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTableBooking);

