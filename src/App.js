import "./App.css";

import { Router, Route, Redirect, Switch } from "react-router-dom";
import { history } from "./Helpers/history";

import Grid from "@material-ui/core/Grid";

import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Tasks from "./Pages/Tasks";
import UpdateTask from "./Pages/UpdateTask";
import NewTask from "./Pages/NewTask";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item xs={11} sm={5} md={5} lg={4}>
            <Switch>
              <PrivateRoute exact path="/" component={Tasks} />
              <PrivateRoute exact path="/new-task" component={NewTask} />
              <PrivateRoute exact path="/update-task" component={UpdateTask} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Redirect from="*" to="/login" />
            </Switch>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
