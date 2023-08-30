import { useState } from "react";
import { datetimeString } from "../utils/utils";
import {
  createNewTask,
  deleteTaskById,
  getTaskById,
} from "../api/tasks_api.js";
import { useParams } from "react-router-dom";

export default function CreateTasks(props) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [postText, setPostText] = useState("");
  const [postCode, setPostCode] = useState(0);
  const [executing, setExecuting] = useState(false);
  const [params, setParams] = useState(useParams());

  if (params.id) {
    getTaskById(params.id).then((response) => {
      setTaskTitle(response.data.title);
      setTaskDesc(response.data.description);
    });
  }

  const sendCreateNewTask = async (e) => {
    e.preventDefault();
    const newTaskData = {
      title: taskTitle,
      description: taskDesc,
      done: false,
      date_created: datetimeString(Date.now()),
    };
    setExecuting(true);
    createNewTask(newTaskData).then((response) => {
      setPostCode(response.status);
      setPostText(response.statusText);
      setExecuting(false);
    });
  };

  const deleteTaskConfirmation = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete the task?"
    );
    if (confirmed) {
      await deleteTaskById(params.id);
    }
  };

  return (
    <>
      <form onSubmit={sendCreateNewTask}>
        <h1>Create Tasks</h1>
        <input
          className="row"
          type="text"
          placeholder="Title"
          value={taskTitle}
          onChange={(event) => {
            setTaskTitle(event.target.value);
          }}
          required
        ></input>
        <textarea
          className="row"
          rows="4"
          placeholder="Description"
          value={taskDesc}
          onChange={(event) => {
            setTaskDesc(event.target.value);
          }}
        ></textarea>
        <button className="row" type="submit" disabled={executing}>
          Save
        </button>
      </form>
      <div>
        {params.id && (
          <>
            <button disabled={executing}>Edit</button>
            <button onClick={deleteTaskConfirmation} disabled={executing}>
              Delete
            </button>
            <button disabled={executing}> Cancel</button>
          </>
        )}
      </div>
      <div>
        <p>{postText !== "" ? postText : ""}</p>
      </div>
    </>
  );
}
