import React,{useEffect,useState} from 'react';
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import TextBox from '../../Comman/Feilds/TextBox';
import B1 from "../../../Image/B1.jpg";
import Button from '../../Comman/Feilds/Button';
import {connect} from "react-redux";
import { AddTableData } from '../../../Redux/Action/Admin/AuthAdminAction';

const BookYourTable = ({AddTableData}) => { 
    
    const history = useHistory();
    const [StateTable,SetStateTable] = useState({
        name:"",
        email:"",
        mobileNo:"",
        tableNo:"", 
    })

    

    const OnSubmit = (e) => {
    e.preventDefault();
    const TableData = {
            name:StateTable.name,
            email:StateTable.email,
            mobileNo:StateTable.mobileNo,
            tableNo:StateTable.tableNo, 
    }
    AddTableData(TableData, history)
   
} 

    const OnChange = (e) =>{
        SetStateTable({
            ...StateTable,
            [e.target.name] :e.target.value
        })
    }
 
    return (
        <div className="BookYourTable BGColor commanBlock">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tableBook">
                            <h3>Book Your Table For Evening Party</h3>
                            <hr />
                            <form onSubmit={OnSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <TextBox 
                                            type="text" 
                                            onChange={OnChange}  
                                            label="Name" 
                                            name="name"
                                            value={StateTable.name} 
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextBox 
                                            type="text" 
                                            onChange={OnChange} 
                                            name="email"
                                            value={StateTable.email} 
                                            label="Email" 
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextBox 
                                            type="text" 
                                            onChange={OnChange} 
                                            label="Mobile No." 
                                            value={StateTable.mobileNo} 
                                            name="mobileNo"
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="form-group">
                                            <label for="sel1">Table No.</label>
                                            <select class="form-control" name="tableNo" value={StateTable.tableNo}  onChange={OnChange} id="sel1">
                                                <option>-select Table-</option>
                                                <option value="702">702</option>
                                                <option value="801">801</option>
                                                <option value="555">555</option>
                                                <option value="780">780</option>
                                                <option value="310">310</option>
                                                <option value="510">510</option>
                                                <option value="816">816</option>
                                                <option value="101">101</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div class="BtnSubmit">
                                            <Button type="submit" value="Book now" />
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <img src={ B1 } className="img-fluid" />

                    </div>
                </div>


            </div>
        </div>
    ); 
};

 

BookYourTable.propTypes = {
    AddTableData:PropTypes.func.isRequired
}

const mapDispatchToProps = {
    AddTableData
}

export default connect(null,mapDispatchToProps)(BookYourTable);