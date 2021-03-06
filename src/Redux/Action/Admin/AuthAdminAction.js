import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../../Component/SetAuth/setAuthToken";
import { CURRENT_ADMIN, LIST_ADMIN, DELETE_ADMIN, BOOKING_ROOMS, SINGLE_BOOKING_ROOMS, ADD_BOOKING_ROOMS, TABLE_BOOKING,EDIT_TABLE_BOOKING, SINGLE_TABLE_BOOKING, ADD_TABLE_BOOKING } from "../Type";

// Admin Sign Up
export const FuncAdminSignUp = (AdminSignUpData, history) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/admin/SignUp", AdminSignUpData)
    .then(
      (res) =>
        dispatch({
          type: CURRENT_ADMIN,
          payload: res.data,
        }),
      history.push("/admin/list")
    )
    .catch((err) => console.log(err));
};

// Admin Sign In
export const FuncAdminSignIn = (AdminSignInData, history) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/admin/SignIn", AdminSignInData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtAdminToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentAdmin(decoded));
      history.push("/admin/dashboard")
    })
    .catch((err) => console.log(err));
};

// Current Admin
export const setCurrentAdmin = (decoded) => {
  return {
    type: CURRENT_ADMIN,
    payload: decoded,
  };
};

// Admin Logout
export const adminLogout = () => (dispatch) => {
  localStorage.removeItem("jwtAdminToken");
  setAuthToken(false);
  dispatch(setCurrentAdmin(false));
};

// List Of Admin
export const AdminList = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/admin/list")
    .then((res) =>
      dispatch({
        type: LIST_ADMIN,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

// Delete Admin
export const AdminDelete = (id, history) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/admin/deleteAdmin/${id}`)
    .then(
      (res) =>
        dispatch({
          type: DELETE_ADMIN,
          payload: res.data,
        }),
      history.push("/admin/dashboard")
    )
    .catch((err) => console.log(err));
};

// Add Booking info
export const AddBookingFunc = (BookingData,history) => (dispatch) =>{
  
  axios
    .post("http://localhost:5000/api/bookingHotel",BookingData)
    .then((res)=>dispatch({
        type:ADD_BOOKING_ROOMS,
        payload:res.data
    }),
    history.push("/admin/booking")
    )
    .catch((err)=> console.log(err));
}

// Get All Booking info
export const BookingRoomsFunc = () => (dispatch) =>{
  axios
    .get("http://localhost:5000/api/bookingHotel")
    .then((res)=>
      dispatch({
        type:BOOKING_ROOMS,
        payload:res.data
    })
    )
    .catch((err)=> console.log(err))
}

// Get Single Booking info
export const SingleRoomsFunc = (id) => (dispatch) =>{
  axios
    .get(`http://localhost:5000/api/bookingHotel/${id}`)
    .then((res)=>
      dispatch({
        type:SINGLE_BOOKING_ROOMS,
        payload:res.data
    })     
    )
    .catch((err)=> console.log(err))
}


// Edit Single Booking info
export const EditBookingFunc = (id, BookingEditData,history) => (dispatch) => {
  axios
    .patch(`http://localhost:5000/api/bookingHotel/${id}`, BookingEditData)
    .then((res)=>dispatch({
      type:SINGLE_BOOKING_ROOMS,
      payload:res.data
    }),
      history.push(`/admin/booking/${id}`)
    ).catch((err) => console.log(err))
}

// Delete Single Booking info
export const DeleteBookFunc = (id) => (dispatch) =>{ 
  axios
    .delete(`http://localhost:5000/api/bookingHotel/${id}`)
    .then((res)=>dispatch({
        type:BOOKING_ROOMS,
        payload:res.data 
    }))
    .catch((err) => console.log(err))
}

// Get All Table Booking info
export const GetTableFunc = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/tableBook")
    .then((res)=> dispatch({
      type:TABLE_BOOKING,
      payload:res.data
    }))
    .catch((err) => console.log(err))
}

// Get Single Table Booking info
export const GetSingleTableFunc = (id) => (dispatch) => {
  axios
    .get(`http://localhost:5000/api/tableBook/${id}`)
    .then((res)=> dispatch({
      type:SINGLE_TABLE_BOOKING,
      payload:res.data
    }))
    .catch((err) => console.log(err))
}

// Edit Single Table Booking info
export const EditTableFunc = (id,TableEditData,history) => (dispatch) => {
  axios
    .patch(`http://localhost:5000/api/tableBook/${id}`, TableEditData)
    .then((res)=> dispatch({
      type:EDIT_TABLE_BOOKING,
      payload:res.data
    }),
    history.push("/admin/dashboard")
    )
    .catch((err) => console.log(err))
}

// Get Single Table Booking info
export const AddTableData = (TableData) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/tableBook/",TableData )
    .then((res)=> dispatch({
      type:ADD_TABLE_BOOKING,
      payload:res.data
    }) 
    )
    .catch((err) => console.log(err))
}


export const DeleteTableData = (id,history) => (dispatch) => {
  
  axios
    .delete(`http://localhost:5000/api/tableBook/${id}` )
    .then((res)=> dispatch({
      type:SINGLE_TABLE_BOOKING,
      payload:res.data
    }),
    history.push("/admin/dashboard")
    )
    .catch((err) => console.log(err))
}

