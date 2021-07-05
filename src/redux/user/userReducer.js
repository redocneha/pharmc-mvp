import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { GLOBAL } from "./action_types";

const initialState = {
  user: {
       loginStatus: "Pending",
       registrationStatus: "",
       id: 0
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL.USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user: {
          ...state.user,
          loginStatus: "Success",
          id: action.payload.id
        },
      });

    case GLOBAL.USER_LOGIN_FAILURE:
      return Object.assign({}, state, {
        user: {
          ...state.user,
          loginStatus: action.payload.loginStatusMessage,
        },
      });

      case GLOBAL.USER_REGISTRATION_SUCCESS:
        return Object.assign({}, state, {
          user: {
            ...state.user,
            registrationStatus: action.payload.registrationStatusMessage,
            id: action.payload.id
          },
        });

        case GLOBAL.USER_REGISTRATION_FAILURE:
          return Object.assign({}, state, {
            user: {
              ...state.user,
              registrationStatus: action.payload.registrationStatusMessage,
            },
          });

    default:
      return state;
  }
};
