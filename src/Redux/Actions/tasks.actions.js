import { taskConstants } from "../Constants/tasks.constants";
import { taskServices } from "../../Services/tasks.services";
import { messageBoardActions } from "./messageBoard.actions";
import { history } from "../../Helpers/history";

export const tasksActions = {
  getAllTasks,
  createNewTask,
  updateTask,
  updateTaskCompletion,
  deleteTask,
};

// get all tasks
function getAllTasks() {
  return (dispatch) => {
    dispatch(request());
    taskServices
      .getAllTasks()
      .then((tasks) => {
        // console.log(tasks);
        dispatch(success(tasks));
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };

  function request() {
    return {
      type: taskConstants.GET_ALL_TASK_REQUEST,
      payload: [],
    };
  }
  function success(tasks) {
    return {
      type: taskConstants.GET_ALL_TASK_SUCCESS,
      payload: tasks,
    };
  }
  function failure(error) {
    return {
      type: taskConstants.GET_ALL_TASK_FAILURE,
      error,
    };
  }
}
// new task
function createNewTask(newTask) {
  console.log(newTask);
  return (dispatch) => {
    taskServices
      .createNewTask(newTask)
      .then((res) => {
        // console.log(res);
        if (res.status === 201) {
          dispatch(
            messageBoardActions.success({
              topic: "Success 🙂",
              body: "Task successfuly created",
            })
          );
          history.push("/");
        }
      })
      .catch((err) => {
        dispatch(
          messageBoardActions.error({
            topic: "Error 🙁",
            body: "Task not created",
          })
        );

        return err;
      });
  };
}
// update task
function updateTask(id, updatedTask) {
  console.log(id, updatedTask);
  return (dispatch) => {
    taskServices
      .updateTask(id, updatedTask)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          dispatch(
            messageBoardActions.success({
              topic: "Success 🙂",
              body: "Task successfuly Updated",
            })
          );
          history.push("/");
        }
      })
      .catch((err) => {
        dispatch(
          messageBoardActions.error({
            topic: "Error 🙁",
            body: "Task not updated",
          })
        );
        return err;
      });
  };
}
// update task compilation
function updateTaskCompletion(id) {
  return (dispatch) => {
    taskServices
      .updateTaskCompletion(id)
      .then((res) => {
        if (res) {
          console.log(res.data.result.task_done);
          dispatch(changeTaskCompl(id));
          if (res.data.result.task_done) {
            dispatch(
              messageBoardActions.success({
                topic: "Task Done 🙂",
              })
            );
          } else {
            dispatch(
              messageBoardActions.success({
                topic: "Task Not Done 🤔",
              })
            );
          }
        }
      })
      .catch((err) => err);
  };
  function changeTaskCompl(id) {
    return {
      type: taskConstants.CHANGE_TASK_COMPL,
      id,
    };
  }
}
// delete task
function deleteTask(id) {
  return (dispatch) => {
    taskServices
      .deleteTask(id)
      .then((res) => {
        if (res) {
          dispatch(deleteOneTask(id));
          dispatch(
            messageBoardActions.success({
              topic: "Task Deleted ♻️",
            })
          );
        }
      })
      .catch((err) => {
        messageBoardActions.error({
          topic: "Task Not Deleted ",
          body: JSON.stringify(err),
        });
        return err;
      });
  };
  function deleteOneTask(id) {
    return {
      type: taskConstants.DELETE_ONE_TASK,
      id,
    };
  }
}
