import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "./action_types";

const initialState = {
  user: {
    email: "",
    password: "",
    loginStatus: "Pending",
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user: {
          ...state.user,
          loginStatus: "Success",
        },
      });

    case USER_LOGIN_FAILURE:
      return Object.assign({}, state, {
        user: {
          ...state.user,
          loginStatus: "Success",
        },
      });

    default:
      return state;
  }
};
