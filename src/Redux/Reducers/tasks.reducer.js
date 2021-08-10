// import { HashRouter } from "react-router-dom";
import { taskConstants } from "../Constants/tasks.constants";

export function allTasks(state = [], action) {
  switch (action.type) {
    case taskConstants.GET_ALL_TASK_REQUEST:
      return { tasks: [] };
    case taskConstants.GET_ALL_TASK_SUCCESS:
      return { tasks: action.payload };
    case taskConstants.GET_ALL_TASK_FAILURE:
      return { tasks: [] };
    case taskConstants.CHANGE_TASK_COMPL:
      return {
        tasks: state.tasks.map((t) => {
          if (t.id == action.id) {
            t.task_done = !t.task_done;
          }
          return t;
        }),
      };
    case taskConstants.DELETE_ONE_TASK:
      console.log(action.id.id);
      return {
        tasks: state.tasks.filter((t) => t.id !== action.id.id),
      };
    default:
      return state;
  }
}
