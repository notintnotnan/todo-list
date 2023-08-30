import axios from "axios";

const getAllTasks = () => {
  const response = axios.get(
    "http://localhost:8000/todo_tasks/api/v1/todo_tasks/"
  );
  return response;
};

export { getAllTasks };
