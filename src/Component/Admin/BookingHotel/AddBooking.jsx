import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Button from '../../Comman/Feilds/Button';
import TextBox from '../../Comman/Feilds/TextBox';
import { AddBookingFunc } from '../../../Redux/Action/Admin/AuthAdminAction';

const AddBooking = ({AddBookingFunc,adminAuth,customprops}) => {

    const [State,SetState] = useState({
        RoomNo:"",
        RoomImage:"",
        RoomHead:"",
        RoomPrice:"",
        RoomeDate:"",
        RoomeAvilable:""
    });

    const ClickSubmit = (e) => {
        e.preventDefault(); 
        const history = customprops.history;

        const BookingData  = { 
            RoomNo:State.RoomNo,
            RoomImage:State.RoomImage,
            RoomHead:State.RoomHead,
            RoomPrice:State.RoomPrice,
            RoomeDate:State.RoomeDate,
            RoomeAvilable:State.RoomeAvilable
        } 
        AddBookingFunc(BookingData,history);
    }

    const HandleChange = (e) => {
        SetState({
            ...State,
            [e.target.name] : e.target.value
        }) 
    }

    return (
        <div className="container">
            <div className="AdminComman">
            <h4>Add Booking Hotel Info</h4>
                <hr />
                <div className="row">
                    <div className="col-lg-6 m-auto">
                        <form onSubmit={ClickSubmit}>
                             <TextBox
                                label="Room No"
                                type="text"
                                name="RoomNo"
                                value={State.RoomNo} 
                                onChange={HandleChange}
                            />

                            <TextBox
                                label="Room Image"
                                type="text"
                                name="RoomImage"
                                value={State.RoomImage} 
                                onChange={HandleChange}
                            />

                            <TextBox
                                label="Heading"
                                type="text"
                                name="RoomHead"
                                value={State.RoomHead} 
                                onChange={HandleChange}
                            />

                            <TextBox
                                label="Price"
                                type="text"
                                name="RoomPrice"
                                value={State.RoomPrice} 
                                onChange={HandleChange}
                            />

                            <TextBox
                                label="Date"
                                type="date"
                                name="RoomeDate"
                                value={State.RoomeDate} 
                                onChange={HandleChange}
                            />

                            <TextBox
                                label="Avilable"
                                type="text"
                                name="RoomeAvilable"
                                value={State.RoomeAvilable} 
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


AddBooking.propTypes = { 
    adminAuth:PropTypes.object.isRequired,
    AddBookingFunc:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    adminAuth:state.adminAuth
})

const mapDispatchToProps = {
    AddBookingFunc
}


export default connect(mapStateToProps,mapDispatchToProps)(AddBooking);
