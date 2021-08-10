import React, { useEffect } from "react";
import "./Task.css";
import { useDispatch } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import OptionMenu from "./OptionMenu";
import { tasksActions } from "../Redux/Actions/tasks.actions";

function Task(task) {
  const dispatch = useDispatch();
  const { content, id, on_date, on_time, task_done, taskname } = task;

  function changeTaskCompletion(e) {
    dispatch(tasksActions.updateTaskCompletion(e.target.value));
  }

  useEffect(() => {}, []);
  return (
    <div className="Task">
      <div className="Task">
        <div className="col-one">
          <Checkbox
            onChange={changeTaskCompletion}
            checked={task_done}
            value={id}
            style={{ color: "#298C68" }}
          />
        </div>
        <div className="col-two">
          <p className="TaskTopic">{taskname}</p>
          <p className="TaskContent">{content}</p>
          <p className="TimeDate">
            {on_time && "@"} <span>{on_time}</span> {on_date && "on"}
            <span>{on_date}</span>
          </p>
        </div>
        <div className="col-three">
          <OptionMenu {...task} />
          {/*======================*/}
        </div>
      </div>
    </div>
  );
}

export default Task;
