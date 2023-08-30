import { useState } from "react";
import { datetimeString } from "../utils/utils";
import { createNewTask } from "../api/tasks_api.js";

export default function CreateTasks(props) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [postText, setPostText] = useState("");
  const [postCode, setPostCode] = useState(0);
  const [executing, setExecuting] = useState(false);

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

  return (
    <>
      <form onSubmit={sendCreateNewTask}>
        <h1>Create Tasks</h1>
        <input
          className="row"
          type="text"
          placeholder="Title"
          onChange={(event) => {
            setTaskTitle(event.target.value);
          }}
          required
        ></input>
        <textarea
          className="row"
          rows="4"
          placeholder="Description"
          onChange={(event) => {
            setTaskDesc(event.target.value);
          }}
        ></textarea>
        <button className="row" type="submit" disabled={executing}>
          Save
        </button>
      </form>
      <div>
        <p>{postText !== "" ? postText : ""}</p>
      </div>
    </>
  );
}
