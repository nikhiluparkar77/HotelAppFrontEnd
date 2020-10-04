const { CURRENT_ADMIN } = require("../Action/Type");

const initalState = {
  isAdmnAuthenticated: false,
  admin: {},
};

export default function (state = initalState, action) {
  switch (action.type) {
    case CURRENT_ADMIN:
      return {
        ...state,
        isAdmnAuthenticated: action.payload,
        admin: action.payload,
      };
    default:
      return state;
  }
}
