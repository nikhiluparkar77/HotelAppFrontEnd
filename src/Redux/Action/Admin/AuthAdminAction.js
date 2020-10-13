import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../../Component/SetAuth/setAuthToken";
import { CURRENT_ADMIN, LIST_ADMIN } from "../Type";

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
      history.push("/dashboard")
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
export const AdminDelete = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:5000/api/admin/${id}`)
    .then((res) =>
      dispatch({
        type: LIST_ADMIN,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
