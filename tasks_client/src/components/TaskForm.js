export default function TaskForm(props) {
  const markDoneTask = (e) => {
    e.preventDefault();
    props.doneFun(!props.taskDone);
  };

  const displayShortDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}/${
      date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
    }/${date.getDay() < 10 ? "0" + date.getDay() : date.getDay()}`;
  };

  return (
    <>
      <div className="row">
        <h1>{props.action} Task</h1>
      </div>
      <div className="row">
        <input
          className="row form-control"
          type="text"
          placeholder="Task title"
          value={props.taskTitle}
          onChange={(event) => {
            props.titleFun(event.target.value);
          }}
          required
        ></input>
        <textarea
          className="row form-control"
          rows="4"
          placeholder="Description..."
          value={props.taskDesc}
          onChange={(event) => {
            props.descFun(event.target.value);
          }}
        ></textarea>
      </div>
      <div className="container row align-items-center">
        <div className="col-3 text-center">
          <div className="row">
            <button
              className={
                props.taskDone
                  ? "btn btn-outline-success"
                  : "btn btn-outline-secondary"
              }
              onClick={markDoneTask}
            >
              {props.taskDone ? "Done" : "Undone"}
            </button>
          </div>
        </div>
        <div className="col-3 text-center">
          <div className="row">
            <label>{props.taskCreateDate ? "Created" : "Creation "}</label>
          </div>
          <div className="row">
            <span>
              {props.taskCreateDate
                ? " " + displayShortDate(props.taskCreateDate)
                : " pending."}
            </span>
          </div>
        </div>
        <div className="col-3 text-center">
          <div className="row">
            <label>{props.taskDoneDate ? "Done" : ""}</label>
          </div>
          <div className="row">
            <span>
              {props.taskDoneDate
                ? " " + displayShortDate(props.taskDoneDate)
                : ""}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
