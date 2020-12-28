import React,{useEffect,useState} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { BookingRoomsFunc, DeleteBookFunc } from '../../../Redux/Action/Admin/AuthAdminAction';
import Button from '../../Comman/Feilds/Button';

const GetBooking = ({BookingRoomsFunc,DeleteBookFunc,adminAuth}) => {
    
    const [Booking,SetBooking] = useState([]);

    useEffect(()=>{
        BookingRoomsFunc();
    },[])

    useEffect(()=>{
        SetBooking(adminAuth.BookingRooms)
    },[adminAuth.BookingRooms]);

    const DateleEditRoomInfo = (id) => {
        DeleteBookFunc(id);
        SetBooking(adminAuth.BookingRooms);
    }
   
    const EditRoomInfo = (id) => {
        console.log(id);
    }
    useEffect(()=>{
        SetBooking(adminAuth.BookingRooms)
    },[adminAuth.BookingRooms]);

    let BookingData;
    if(Booking.length == undefined){
        BookingData = <h4>No Rooms Avilable</h4>
    }else{
        BookingData = (
            <>
            {
                Booking.map((item,index)=>(
                    <tr key={index}> 
                    <td>{item.RoomNo}</td>
                    <td><img src={item.RoomImage} className="img-fluid BookingImage" /></td>
                    <td>{item.RoomHead}</td>
                    <td>{item.RoomPrice}</td>
                    <td><Moment format="DD/MM/YYYY">{item.RoomeDate}</Moment> </td>
                    <td>{item.RoomeAvilable}</td>
                    <td className="BookingBtn">
                        <Button value="Edit" onclick={(e)=>EditRoomInfo(item._id)}  /><Button value="Delete" onclick={(e)=>DateleEditRoomInfo(item._id)} />
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
                <h4>Booking Hoterl Info</h4>
                <hr />
            
                    <table className="table table-bordered">
                        <thead>
                            <tr> 
                                <th>Room No</th>
                                <th>Image</th> 
                                <th>Heading</th>
                                <th>Room Price</th>
                                <th>Date</th>
                                <th>Avilable</th>
                                <td>Action</td>
                            </tr>
                        </thead>
                    <tbody>
                        {BookingData}
                    </tbody> 
                </table>
            </div>
        </div>
    )
}

GetBooking.propTypes = {
    BookingRoomsFunc:PropTypes.func.isRequired,
    adminAuth:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    adminAuth:state.adminAuth
})

const mapDispatchToProps = {
    BookingRoomsFunc,
    DeleteBookFunc
}

export default connect(mapStateToProps,mapDispatchToProps)(GetBooking);