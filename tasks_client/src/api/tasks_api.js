import axios from "axios";

const tasksAxiosInstance = axios.create({
  baseURL: "http://localhost:8000/todo_tasks/api/v1/todo_tasks/",
});

const getAllTasks = () => {
  const response = tasksAxiosInstance.get("/");
  return response;
};

const createNewTask = (newTaskData) => {
  const request = tasksAxiosInstance.post("/", newTaskData);
  return request;
};

const deleteTaskById = (taskId) => {
  const request = tasksAxiosInstance.delete(`/${taskId}/`);
  return request;
};

const getTaskById = (taskId) => {
  const request = tasksAxiosInstance.get(`/${taskId}/`);
  return request;
};

const updateTaskById = (taskId, newTaskData) => {
  const request = tasksAxiosInstance.put(`/${taskId}/`, newTaskData);
  return request;
};

export {
  getAllTasks,
  createNewTask,
  deleteTaskById,
  getTaskById,
  updateTaskById,
};
