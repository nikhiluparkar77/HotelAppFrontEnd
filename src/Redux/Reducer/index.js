import { combineReducers } from "redux";
import AuthAdminReducer from "./AuthAdminReducer";
import AuthReducer from "./AuthReducer";
import ContactReducer from "./contactReducer";

export default combineReducers({
  auth: AuthReducer,
  adminAuth: AuthAdminReducer,
  contact:ContactReducer
});
