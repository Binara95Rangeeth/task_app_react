import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useLocation } from "react-router-dom";

import { history } from "../../Helpers/history";
import { useDispatch } from "react-redux";
import { tasksActions } from "../../Redux/Actions/tasks.actions";

function NewTask() {
  const [newTask, setNewTask] = useState({
    taskname: "",
    content: "",
    on_date: "",
    on_time: "",
  });
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    // console.log("yo", location.state);
  }, []);

  //handleInputs
  function handleInputs(e) {
    const { name, value } = e.target;
    // console.log(name, value);
    setNewTask({ ...newTask, [name]: value });
  }
  //handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    // console.log("new task", newTask);
    if (newTask.taskname) {
      dispatch(tasksActions.createNewTask(newTask));
    }
  }

  return (
    <>
      <form name="form" onSubmit={handleSubmit}>
        <Grid direction="column" container>
          <Box py={2}>
            <h1>New Task</h1>
          </Box>
          <TextField
            onChange={handleInputs}
            label="Task Name"
            name="taskname"
            type="text"
            variant="outlined"
            size="small"
            style={{ marginBottom: 10 }}
          />

          <TextField
            onChange={handleInputs}
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
            name="on_date"
            type="date"
            variant="outlined"
            size="small"
            style={{ marginBottom: 10 }}
          />

          <TextField
            onChange={handleInputs}
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
              Create Task
            </Button>
          </Box>
        </Grid>
      </form>
    </>
  );
}

export default NewTask;
