import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import { tasksActions } from "../../Redux/Actions/tasks.actions";
import { useDispatch, useSelector } from "react-redux";
import Task from "../../Components/Task";
import MessageBoard from "../../Components/MessageBoard";
import { history } from "../../Helpers/history";

import "./Task.css";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();
  const allTasks = useSelector((state) => state.allTasks.tasks);
  const showMessage = useSelector((state) => state.messageBoard.type);

  useEffect(() => {
    dispatch(tasksActions.getAllTasks());
  }, [tasks]);

  return (
    <div className="Tasks">
      <Box py={2}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          m={0}
        >
          <h1>Tasks</h1>
          <div>
            <AddIcon
              onClick={() => {
                history.push("/new-task");
              }}
            />
            <PersonIcon />
          </div>
        </Grid>
      </Box>
      {allTasks && allTasks.map((task) => <Task key={task.id} {...task} />)}
      {showMessage && <MessageBoard />}
    </div>
  );
}

export default Tasks;
