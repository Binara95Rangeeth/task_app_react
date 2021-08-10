import { userConstants } from "../Constants/userAuth.constants";
import { userServices } from "../../Services/user.services";
import { history } from "../../Helpers/history";

export const userAuthActions = {
  login,
  logout,
  signup,
};

//login
function login(username, password, from) {
  return (dispatch) => {
    dispatch(request({ username }));

    userServices.userLogin(username, password).then(
      (user) => {
        // console.log("from actions", user);
        dispatch(success(user));
        history.push(from);
      },
      (error) => {
        dispatch(failure({ error }));
      }
    );
  };
  function request(user) {
    return {
      type: userConstants.USER_LOGIN_REQUEST,
      user,
    };
  }
  function success(user) {
    return {
      type: userConstants.USER_LOGIN_SUCCESS,
      user,
    };
  }
  function failure(error) {
    return {
      type: userConstants.USER_LOGIN_FAILURE,
      error,
    };
  }
}

//logout
function logout() {
  userServices.userLogout();
  return { type: userConstants.USER_LOGOUT };
}

//signup
function signup(user) {
  return () => {
    console.log(user);
    userServices.userSignup(user).then(
      (user) => {
        // console.log(user);
        history.push("/login");
        return user;
      },
      (err) => {
        return err;
      }
    );
  };
}
