import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks_api.js";
import TaskListItem from "./TaskListItem.js";
import { useNavigate } from "react-router-dom";

export default function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadAllTasks = async () => {
      const allTasks = await getAllTasks();
      setTaskList(allTasks.data);
    };
    loadAllTasks();
  }, []);

  return (
    <>
      <div>
        {taskList.length === 0 ? (
          <>
            <div className="container">
              <h2>No tasks to show...</h2>
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  navigate("/todo_tasks_create");
                }}
              >
                Add one!
              </button>
            </div>
          </>
        ) : (
          taskList.map((item) => {
            return (
              <TaskListItem
                key={item.id}
                taskId={item.id}
                taskTitle={item.title}
                taskDesc={item.description}
                done={item.done}
              ></TaskListItem>
            );
          })
        )}
      </div>
    </>
  );
}
