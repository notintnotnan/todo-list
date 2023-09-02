export default function TaskForm(props) {
  return (
    <>
      <div className="row">
        <h1>{props.action} Task</h1>
      </div>
      <div className="row">
        <input
          className="row"
          type="text"
          placeholder="Task title"
          value={props.taskTitle}
          onChange={(event) => {
            props.titleFun(event.target.value);
          }}
          required
        ></input>
        <textarea
          className="row"
          rows="4"
          placeholder="Description..."
          value={props.taskDesc}
          onChange={(event) => {
            props.descFun(event.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <input
          type="checkbox"
          checked={props.taskDone}
          onChange={(event) => {
            props.doneFun(event.target.checked);
          }}
        ></input>
        <label>Done</label>
      </div>
    </>
  );
}
