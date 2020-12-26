import React, {useState,useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Button from '../../Comman/Feilds/Button';
import Moment from "react-moment";
import { BookingRoomsFunc } from '../../../Redux/Action/Admin/AuthAdminAction';
import B1 from "../../../Image/B1.jpg";
import B2 from "../../../Image/B2.jpg";


const FilterResult = ({BookingRoomsFunc,adminAuth}) => {

    const [Booking,SetBooking] = useState([]);

    useEffect(()=>{
        BookingRoomsFunc();
    },[])

    useEffect(()=>{
        SetBooking(adminAuth.BookingRooms)
    },[adminAuth.BookingRooms]);

    console.log(Booking);

    let BookingData;
    if(Booking.length == undefined){
        BookingData = <h4>No Rooms Avilable</h4>
    }else{
        BookingData = (
            <div className="row">
            {
                Booking.map((item,index)=>(
                    <div className="col-lg-4 pt-4" key={index}>
                        <div className="card">
                            <img className="card-img-top" src={ item.RoomImage } alt="Card image" />
                            <div className="card-body">
                                <div className="SellingLink">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p>Room No {item.RoomNo}</p>
                                            <h5 className="card-title">{item.RoomHead}</h5>
                                            <p className="date"><Moment format="DD/MM/YYYY">{item.RoomeDate}</Moment> </p>
                                            <Button value="Book Hotel" />
                                        </div>
                                        <div className="col-lg-6 text-right">
                                            <h5 className="card-title">{item.RoomPrice} Rs/-</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                
            }
           </div>
        );
    }


    return (
        <div className="SearchResult">
             {BookingData}
            <div className="row">
               
                <div className="col-lg-4 pt-4">
                    <div className="card">
                        <img className="card-img-top" src={ B1 } alt="Card image" />
                        <div className="card-body">
                            <div className="SellingLink">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="card-title">Rooms Details</h5>
                                        <p className="date">10-11-2018 </p>
                                        <Button value="Book Hotel" />
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <h5 className="card-title">200$</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4  pt-4">
                    <div className="card">
                        <img className="card-img-top" src={ B2 } alt="Card image" />
                        <div className="card-body">
                            <div className="SellingLink">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="card-title">Rooms Details</h5>
                                        <p className="date">10-11-2018 </p>
                                        <Button value="Book Hotel" />
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <h5 className="card-title">200$</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 pt-4">
                    <div className="card">
                        <img className="card-img-top" src={ B1 } alt="Card image" />
                        <div className="card-body">
                            <div className="SellingLink">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="card-title">Rooms Details</h5>
                                        <p className="date">10-11-2018 </p>
                                        <Button value="Book Hotel" />
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <h5 className="card-title">200$</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4  pt-4">
                    <div className="card">
                        <img className="card-img-top" src={ B2 } alt="Card image" />
                        <div className="card-body">
                            <div className="SellingLink">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="card-title">Rooms Details</h5>
                                        <p className="date">10-11-2018 </p>
                                        <Button value="Book Hotel" />
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <h5 className="card-title">200$</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 pt-4">
                    <div className="card">
                        <img className="card-img-top" src={ B1 } alt="Card image" />
                        <div className="card-body">
                            <div className="SellingLink">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="card-title">Rooms Details</h5>
                                        <p className="date">10-11-2018 </p>
                                        <Button value="Book Hotel" />
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <h5 className="card-title">200$</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4  pt-4">
                    <div className="card">
                        <img className="card-img-top" src={ B2 } alt="Card image" />
                        <div className="card-body">
                            <div className="SellingLink">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="card-title">Rooms Details</h5>
                                        <p className="date">10-11-2018 </p>
                                        <Button value="Book Hotel" />
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <h5 className="card-title">200$</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 pt-4">
                    <div className="card">
                        <img className="card-img-top" src={ B1 } alt="Card image" />
                        <div className="card-body">
                            <div className="SellingLink">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="card-title">Rooms Details</h5>
                                        <p className="date">10-11-2018 </p>
                                        <Button value="Book Hotel" />
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <h5 className="card-title">200$</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4  pt-4">
                    <div className="card">
                        <img className="card-img-top" src={ B2 } alt="Card image" />
                        <div className="card-body">
                            <div className="SellingLink">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="card-title">Rooms Details</h5>
                                        <p className="date">10-11-2018 </p>
                                        <Button value="Book Hotel" />
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <h5 className="card-title">200$</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 pt-4">
                    <div className="card">
                        <img className="card-img-top" src={ B1 } alt="Card image" />
                        <div className="card-body">
                            <div className="SellingLink">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="card-title">Rooms Details</h5>
                                        <p className="date">10-11-2018 </p>
                                        <Button value="Book Hotel" />
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <h5 className="card-title">200$</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4  pt-4">
                    <div className="card">
                        <img className="card-img-top" src={ B2 } alt="Card image" />
                        <div className="card-body">
                            <div className="SellingLink">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="card-title">Rooms Details</h5>
                                        <p className="date">10-11-2018 </p>
                                        <Button value="Book Hotel" />
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <h5 className="card-title">200$</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 pt-4">
                    <div className="card">
                        <img className="card-img-top" src={ B1 } alt="Card image" />
                        <div className="card-body">
                            <div className="SellingLink">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="card-title">Rooms Details</h5>
                                        <p className="date">10-11-2018 </p>
                                        <Button value="Book Hotel" />
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <h5 className="card-title">200$</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4  pt-4">
                    <div className="card">
                        <img className="card-img-top" src={ B2 } alt="Card image" />
                        <div className="card-body">
                            <div className="SellingLink">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="card-title">Rooms Details</h5>
                                        <p className="date">10-11-2018 </p>
                                        <Button value="Book Hotel" />
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <h5 className="card-title">200$</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

FilterResult.propTypes = {
    BookingRoomsFunc:PropTypes.func.isRequired,
    adminAuth:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    adminAuth:state.adminAuth,
})

const mapDispatchToProps = {
    BookingRoomsFunc
}


export default connect(mapStateToProps,mapDispatchToProps)(FilterResult);