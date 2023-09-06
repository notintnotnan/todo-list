import axios from "axios";

const tasksAxiosInstance = axios.create({
  baseURL: "http://localhost:8000/todo_tasks/api/v1/",
});

const getAllTasks = () => {
  const response = tasksAxiosInstance.get("list/");
  return response;
};

const createNewTask = (newTaskData) => {
  const request = tasksAxiosInstance.post("create/", newTaskData);
  return request;
};

const getTaskById = (taskId) => {
  const request = tasksAxiosInstance.get(`details/${taskId}/`);
  return request;
};

const updateTaskById = (taskId, newTaskData) => {
  const request = tasksAxiosInstance.put(`update/${taskId}/`, newTaskData);
  return request;
};

const deleteTaskById = (taskId) => {
  const request = tasksAxiosInstance.delete(`delete/${taskId}/`);
  return request;
};

export {
  getAllTasks,
  createNewTask,
  deleteTaskById,
  getTaskById,
  updateTaskById,
};
