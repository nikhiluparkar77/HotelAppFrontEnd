import { combineReducers } from "redux";
import AuthAdminReducer from "./AuthAdminReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
  auth: AuthReducer,
  adminAuth: AuthAdminReducer,
});
