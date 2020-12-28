import { BOOKING_ROOMS,SINGLE_BOOKING_ROOMS } from "../Action/Type";

const { CURRENT_ADMIN, LIST_ADMIN, DELETE_ADMIN} = require("../Action/Type");

const initalState = {
  isAdmnAuthenticated: false,
  admin: {},
  listOfAdmin: [],
  BookingRooms:{},
  SingleBookingRooms:{},
};

export default function (state = initalState, action) {
  switch (action.type) {
    case CURRENT_ADMIN:
      return {
        ...state,
        isAdmnAuthenticated: action.payload,
        admin: action.payload,
      };
    case LIST_ADMIN:
      return {
        ...state,
        listOfAdmin: action.payload,
      };
    case DELETE_ADMIN:
      return {
        ...state,
        listOfAdmin: action.payload,
      };
      case BOOKING_ROOMS:
       return {
          ...state,
          BookingRooms: action.payload,
        };
        case SINGLE_BOOKING_ROOMS:
          return {
             ...state,
             SingleBookingRooms: action.payload,
           };
    default:
      return state;
  }
}
