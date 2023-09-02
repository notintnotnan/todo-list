import { useEffect, useState } from "react";
import { datetimeString } from "../utils/utils";
import {
  createNewTask,
  deleteTaskById,
  getTaskById,
  updateTaskById,
} from "../api/tasks_api.js";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

export default function CreateTasks(props) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDone, setTaskDone] = useState(false);
  const [taskDoneDate, setTaskDoneDate] = useState(null);
  const [postText, setPostText] = useState("");
  const [postCode, setPostCode] = useState(0);
  const [executing, setExecuting] = useState(false);
  const [params, setParams] = useState(useParams());

  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      getTaskById(params.id).then((response) => {
        setTaskTitle(response.data.title);
        setTaskDesc(response.data.description);
        setTaskDone(response.data.done);
        setTaskDoneDate(response.data.date_done);
      });
    }
  }, []);

  const sendCreateNewTask = async (e) => {
    e.preventDefault();
    const newTaskData = {
      title: taskTitle,
      description: taskDesc,
      done: taskDone,
      date_created: datetimeString(Date.now()),
    };
    setExecuting(true);
    createNewTask(newTaskData).then((response) => {
      setPostCode(response.status);
      setPostText(response.statusText);
      setExecuting(false);
      navigate("/todo_tasks/");
    });
  };

  const deleteTaskConfirmation = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete the task?"
    );
    if (confirmed) {
      await deleteTaskById(params.id);
      navigate("/todo_tasks/");
    }
  };

  const sendUpdateTask = async () => {
    const updateTaskFields = {
      title: taskTitle,
      description: taskDesc,
      done: taskDone,
      date_done: taskDoneDate,
    };
    setExecuting(true);
    updateTaskById(params.id, updateTaskFields).then((response) => {
      setPostCode(response.status);
      setPostText(response.statusText);
      setExecuting(false);
      navigate("/todo_tasks/");
    });
  };

  const cancelTaskEdit = () => {
    navigate("/todo_tasks/");
  };

  return (
    <>
      <form onSubmit={sendCreateNewTask}>
        <TaskForm
          taskTitle={taskTitle}
          taskDesc={taskDesc}
          taskDone={taskDone}
          taskDoneDate={taskDoneDate}
          action={params.id ? "Edit" : "Create"}
          titleFun={setTaskTitle}
          descFun={setTaskDesc}
          doneFun={setTaskDone}
          ddateFun={setTaskDoneDate}
        ></TaskForm>
        {!params.id && (
          <>
            <button type="submit" disabled={executing}>
              Save
            </button>
            <button onClick={cancelTaskEdit} type="reset" disabled={executing}>
              Cancel
            </button>
          </>
        )}
      </form>
      <div>
        {params.id && (
          <>
            <button onClick={sendUpdateTask} disabled={executing}>
              Update
            </button>
            <button onClick={deleteTaskConfirmation} disabled={executing}>
              Delete
            </button>
            <button onClick={cancelTaskEdit} disabled={executing}>
              Cancel
            </button>
          </>
        )}
      </div>
      <div>
        <p>{postText !== "" ? postText : ""}</p>
      </div>
    </>
  );
}
