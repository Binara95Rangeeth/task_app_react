import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userAuthActions } from "../../Redux/Actions/userAuth.actions";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => {
    dispatch(userAuthActions.logout());
  }, []);

  //handleInputs
  function handleInputs(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }
  //handleSubmit
  async function handleSubmit(e) {
    e.preventDefault();
    if (user.username && user.password) {
      // console.log(process.env.REACT_APP_API_URL);
      // console.log(user);
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(userAuthActions.login(user.username, user.password, from));
    }
  }
  return (
    <>
      <form name="form" onSubmit={handleSubmit}>
        <Grid direction="column" container>
          <Box py={2}>
            <h1>Login</h1>
          </Box>
          <TextField
            onChange={handleInputs}
            label="User Name"
            name="username"
            type="text"
            variant="outlined"
            size="small"
            style={{ marginBottom: 10 }}
          />
          <TextField
            onChange={handleInputs}
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            size="small"
          />
          <Box component="span" m={1} align="center">
            <Button
              type="submit"
              variant="contained"
              style={{ color: "#fff", backgroundColor: "#298C68" }}
            >
              Login
            </Button>
          </Box>
          <Box component="span" m={1} align="center">
            <p>
              Not a register?{" "}
              <Link
                style={{
                  color: "#298C68",
                  textDecoration: "none",
                  fontWeight: "700",
                }}
                to="/signup"
              >
                Signup
              </Link>
            </p>
          </Box>
        </Grid>
      </form>
    </>
  );
}

export default Login;
