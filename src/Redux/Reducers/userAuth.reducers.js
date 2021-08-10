import { userConstants } from "../Constants/userAuth.constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export function userAuth(state = initialState, action) {
  switch (action.type) {
    case userConstants.USER_LOGIN_REQUEST:
      return { loggingIn: true, user: action.user };
    case userConstants.USER_LOGIN_SUCCESS:
      return { loggedIn: true, user: action.user };
    case userConstants.USER_LOGIN_FAILURE:
      return {};
    case userConstants.USER_LOGOUT:
      return {};
    default:
      return state;
  }
}
