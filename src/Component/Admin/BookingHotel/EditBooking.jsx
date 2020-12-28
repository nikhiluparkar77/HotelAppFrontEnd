import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Button from '../../Comman/Feilds/Button';
import { EditBookingFunc, SingleRoomsFunc } from '../../../Redux/Action/Admin/AuthAdminAction';
import TextBox from '../../Comman/Feilds/TextBox';

const EditBooking = ({ SingleRoomsFunc,EditBookingFunc,customprops,adminAuth}) => {
    const [BookingData,SetBookingData] = useState({
        RoomNo:"",
        RoomImage:"",
        RoomHead:"",
        RoomPrice:"",
        RoomeDate:"",
        RoomeAvilable:""
    })
     
    useEffect(()=>{
        SingleRoomsFunc(customprops.match.params.bookingId);
    },[])

    useEffect(()=>{
        SetBookingData(adminAuth.SingleBookingRooms);
    },[adminAuth.SingleBookingRooms]);
     


    const ClickSubmit = (e) => {
        e.preventDefault();
        const id = customprops.match.params.bookingId;
        const history = customprops.history;
        const BookingEditData  = { 
            RoomNo:BookingData.RoomNo,
            RoomImage:BookingData.RoomImage,
            RoomHead:BookingData.RoomHead,
            RoomPrice:BookingData.RoomPrice,
            RoomeDate:BookingData.RoomeDate,
            RoomeAvilable:BookingData.RoomeAvilable
        }
         
        EditBookingFunc(id,BookingEditData,history);
    }

    const HandleChange = (e) => {
        SetBookingData({
            ...BookingData,
            [e.target.name] : e.target.value
        })
        console.log(BookingData);
    }
  

  

    return (
        <div className="container">
            <div className="AdminComman">
            <h4>Edit Booking Hotel Info</h4>
                <hr />
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <form onSubmit={ClickSubmit}>
                             <TextBox
                                label="Room No"
                                type="text"
                                name="RoomNo"
                                value={BookingData.RoomNo} 
                                onChange={HandleChange}
                            />

                            <TextBox
                                label="Room Image"
                                type="text"
                                name="RoomImage"
                                value={BookingData.RoomImage} 
                                onChange={HandleChange}
                            />

                            <TextBox
                                label="Heading"
                                type="text"
                                name="RoomHead"
                                value={BookingData.RoomHead} 
                                onChange={HandleChange}
                            />

                            <TextBox
                                label="Price"
                                type="text"
                                name="RoomPrice"
                                value={BookingData.RoomPrice} 
                                onChange={HandleChange}
                            />

                            <TextBox
                                label="Date"
                                type="text"
                                name="RoomeDate"
                                value={BookingData.RoomeDate} 
                                onChange={HandleChange}
                            />

                            <TextBox
                                label="Avilable"
                                type="text"
                                name="RoomeAvilable"
                                value={BookingData.RoomeAvilable} 
                                onChange={HandleChange}
                            />

                            <Button type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

EditBooking.propTypes = {
    SingleRoomsFunc:PropTypes.func.isRequired,
    EditBookingFunc:PropTypes.func.isRequired,
    adminAuth:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    adminAuth:state.adminAuth
})

const mapDispatchToProps = {
    SingleRoomsFunc,
    EditBookingFunc
}


export default connect(mapStateToProps,mapDispatchToProps)(EditBooking);
