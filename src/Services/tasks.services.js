import { authHeader } from "../Helpers/auth-header";
const axios = require("axios");

export const taskServices = {
  getAllTasks,
  createNewTask,
  updateTask,
  updateTaskCompletion,
  deleteTask,
};

const API_URL = process.env.REACT_APP_API_URL;
// get all tasks
async function getAllTasks() {
  return await axios.get(`${API_URL}/task`, { headers: authHeader() }).then(
    (user) => {
      return user.data;
    },
    (err) => {
      return err;
    }
  );
}

// new task
async function createNewTask(newTask) {
  return await axios
    .post(`${API_URL}/task/new-task`, newTask, {
      headers: authHeader(),
    })
    .then((result) => result)
    .catch((err) => err);
}

// update task
async function updateTask(id, updatedTask) {
  console.log(id, updatedTask);
  return await axios
    .post(`${API_URL}/task/update-task/${id}`, updatedTask, {
      headers: authHeader(),
    })
    .then((result) => result)
    .catch((err) => err);
}

// update task compilation
async function updateTaskCompletion(id) {
  return await axios
    .get(`${API_URL}/task/update-task-completion/${id}`, {
      headers: authHeader(),
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log("err", err);
      return err;
    });
}

// delete task
async function deleteTask(id) {
  console.log(id.id);
  return await axios
    .delete(`${API_URL}/task/delete-task/${id.id}`, {
      headers: authHeader(),
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log("err", err);
      return err;
    });
}
