import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks_api.js";
import TaskListItem from "./TaskListItem.js";

export default function TaskList(props) {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const loadAllTasks = async () => {
      const allTasks = await getAllTasks();
      setTaskList(allTasks.data);
      console.log(allTasks.data);
    };
    loadAllTasks();
  }, []);

  return (
    <>
      <div>
        <h1>Task List:</h1>
        {taskList.map((item) => {
          return (
            <TaskListItem
              key={item.id}
              taskTitle={item.title}
              taskDesc={item.description}
              done={item.done}
            ></TaskListItem>
          );
        })}
      </div>
    </>
  );
}
