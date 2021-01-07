import { BOOKING_ROOMS,SINGLE_BOOKING_ROOMS,ADD_BOOKING_ROOMS, TABLE_BOOKING,EDIT_TABLE_BOOKING,SINGLE_TABLE_BOOKING, ADD_TABLE_BOOKING } from "../Action/Type";

const { CURRENT_ADMIN, LIST_ADMIN, DELETE_ADMIN} = require("../Action/Type");

const initalState = {
  isAdmnAuthenticated: false,
  admin: {},
  listOfAdmin: [],
  AddBooking:{},
  BookingRooms:{},
  SingleBookingRooms:{},
  tableBooking:{},
  singleTable:{},
  editTableBooking:{},
   addTableBooking:{}
  
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
      case ADD_BOOKING_ROOMS:
       return {
          ...state,
          AddBooking: action.payload,
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
           case TABLE_BOOKING:
          return {
             ...state,
             tableBooking: action.payload,
           };
           case SINGLE_TABLE_BOOKING:
            return {
               ...state,
               singleTable: action.payload,
             };
           case EDIT_TABLE_BOOKING:
            return {
               ...state,
               editTableBooking: action.payload,
             };
             case ADD_TABLE_BOOKING:
              return {
                 ...state,
                 addTableBooking: action.payload,
               };
        default:
        return state;
  }
}
