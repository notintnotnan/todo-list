import { useEffect, useState } from "react";
import { datetimeString, doneDateTransform } from "../utils/utils";
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
  const [taskCreateDate, setTaskCreateDate] = useState(null);
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
        setTaskCreateDate(response.data.date_created);
        setTaskDone(response.data.done);
        setTaskDoneDate(response.data.date_done);
      });
    }
  }, []);

  useEffect(() => {
    if (taskDone) {
      setTaskDoneDate(datetimeString(Date.now()));
    } else {
      setTaskDoneDate(null);
    }
  }, [taskDone]);

  const sendCreateNewTask = async (e) => {
    e.preventDefault();
    const newTaskData = {
      title: taskTitle,
      description: taskDesc,
      done: taskDone,
      date_created: datetimeString(Date.now()),
      date_done: taskDoneDate,
    };
    console.log(newTaskData);
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
      <div className="container">
        <form onSubmit={sendCreateNewTask}>
          <TaskForm
            taskTitle={taskTitle}
            taskDesc={taskDesc}
            taskCreateDate={taskCreateDate}
            taskDone={taskDone}
            taskDoneDate={taskDoneDate}
            action={params.id ? "Edit" : "Create"}
            titleFun={setTaskTitle}
            descFun={setTaskDesc}
            doneFun={setTaskDone}
          ></TaskForm>
          {!params.id && (
            <>
              <button
                className="btn btn-outline-success"
                type="submit"
                disabled={executing}
              >
                Save
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={cancelTaskEdit}
                type="reset"
                disabled={executing}
              >
                Cancel
              </button>
            </>
          )}
        </form>
      </div>
      <div>
        {params.id && (
          <>
            <button
              className="btn btn-outline-success"
              onClick={sendUpdateTask}
              disabled={executing}
            >
              Update
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={deleteTaskConfirmation}
              disabled={executing}
            >
              Delete
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={cancelTaskEdit}
              disabled={executing}
            >
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
