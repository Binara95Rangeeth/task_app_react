const axios = require("axios");

export const userServices = {
  userLogin,
  userLogout,
  userSignup,
};
const API_URL = process.env.REACT_APP_API_URL;

//login
async function userLogin(username, password) {
  return await axios
    .post(`${API_URL}/user/login`, { username, password })
    .then((user) => {
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user.data));
      return user.data;
    })
    .catch((err) => {
      return err;
    });
}

//logout
function userLogout() {
  localStorage.removeItem("user");
}

//signup
async function userSignup(user) {
  return await axios.post(`${API_URL}/user/sign-up`, user).then(
    (user) => {
      console.log(user);
      return user;
    },
    (err) => {
      return err;
    }
  );
}
