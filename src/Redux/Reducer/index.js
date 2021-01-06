import { combineReducers } from "redux";
import AuthAdminReducer from "./AuthAdminReducer";
import AuthReducer from "./AuthReducer";
import ContactReducer from "./contactReducer";
import SliderReducer from "./SliderReducer"

export default combineReducers({
  auth: AuthReducer,
  adminAuth: AuthAdminReducer,
  contact:ContactReducer,
  slider:SliderReducer
});
