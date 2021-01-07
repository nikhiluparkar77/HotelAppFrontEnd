import React,{useEffect,useState} from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"; 
import Button from '../../Comman/Feilds/Button'; 
import { GetTableFunc } from '../../../Redux/Action/Admin/AuthAdminAction';

const GetTableBooking = ({GetTableFunc,adminAuth,customprops}) => {
 
    const [SetTable,SetSetTable] = useState([]); 

    useEffect(()=>{
        GetTableFunc();
      },[]);

      useEffect(()=>{
        SetSetTable(adminAuth.tableBooking)
      },[adminAuth]);


      const DeleteBookedTable = (id) => {
        const history = customprops.history;
        // deleteSliderFunc(id,history);
        console.log(id)
      }
 

      let TabelData ;
    if(SetTable.length === undefined){
        TabelData = <tr><td>No Table Booking Avilable</td></tr>
    }else{
        TabelData = (
         <>
          {
            SetTable.map((item,index)=>( 
              <tr key={index}>
                  <td>{index + 1}</td>
                  <td>  {item.name}   </td>
                  <td>{item.email}</td>
                  <td>{item.mobileNo}</td>
                  <td>{item.tableNo}</td>
                  <td>{item.date}</td>
                  <td>{item.booked}</td>
                  <td className="commanBtn"><Link to={`/admin/table/${item._id}`}><Button value="Edit" /></Link>  <Button value="Delete" onclick={(e)=>DeleteBookedTable(item._id)} /></td> 
              </tr>
            
            ))
          }
        </>    
      )
    }
    


    return (
        <div className="AdminList commanBlock">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h4>Table Booking Info</h4>
                    </div>
                    <div className="col-lg-6">
                        <Link to="/admin/add-slider" className="text-right"><Button value="Add Slider" /></Link>
                    </div>
                </div>
                <hr />
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Name</th>
                        <th>Email </th>
                        <th>Mobile No. </th>
                        <th>Table No.</th>
                        <th>Date</th>
                        <th>Avilable</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {TabelData}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

GetTableBooking.propTypes = {
    GetTableFunc:PropTypes.func.isRequired,
    adminAuth:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    adminAuth:state.adminAuth
})

const mapDispatchToProps = {
    GetTableFunc
}

export default connect(mapStateToProps,mapDispatchToProps)(GetTableBooking);
