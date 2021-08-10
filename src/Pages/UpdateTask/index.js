import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useLocation } from "react-router-dom";

import { history } from "../../Helpers/history";
import { useDispatch } from "react-redux";
import { tasksActions } from "../../Redux/Actions/tasks.actions";

function UpdateTask() {
  const [updatedTask, setUpdatedTask] = useState({
    taskname: "",
    content: "",
    on_date: "",
    on_time: "",
  });
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    console.log("yo", location.state);
  }, []);

  //handleInputs
  function handleInputs(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setUpdatedTask({ ...updatedTask, [name]: value });
  }
  //handleSubmit
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("updatedTask", updatedTask);
    dispatch(tasksActions.updateTask(location.state.id, updatedTask));
  }

  return (
    <>
      <form name="form" onSubmit={handleSubmit}>
        <Grid direction="column" container>
          <Box py={2}>
            <h1>Update Task</h1>
          </Box>
          <TextField
            onChange={handleInputs}
            defaultValue={location.state.taskname}
            label="Task Name"
            name="taskname"
            type="text"
            variant="outlined"
            size="small"
            style={{ marginBottom: 10 }}
          />

          <TextField
            onChange={handleInputs}
            defaultValue={location.state.content}
            label="Content"
            name="content"
            type="text"
            multiline
            variant="outlined"
            size="small"
            style={{ marginBottom: 10 }}
          />

          <TextField
            onChange={handleInputs}
            defaultValue={location.state.on_date}
            name="on_date"
            type="date"
            variant="outlined"
            size="small"
            style={{ marginBottom: 10 }}
          />

          <TextField
            onChange={handleInputs}
            defaultValue={location.state.on_time}
            name="on_time"
            type="time"
            variant="outlined"
            size="small"
            style={{ marginBottom: 10 }}
          />
          <Box component="span" m={1} align="right">
            <Button
              variant="contained"
              onClick={() => {
                history.push("/");
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              style={{
                marginLeft: "10px",
                color: "#fff",
                backgroundColor: "#298C68",
              }}
            >
              Update
            </Button>
          </Box>
        </Grid>
      </form>
    </>
  );
}

export default UpdateTask;
