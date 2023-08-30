export default function TaskListItem(props) {
  const doneMarker = props.done ? "-success" : "-secondary";
  const doneText = props.done ? "Done" : "Undone";
  return (
    <>
      <div className="row">
        <h3>
          {props.taskTitle}
          <span className={`badge bg${doneMarker}`}>{doneText}</span>
        </h3>
        <div>
          <p className="row">{props.taskDesc}</p>
        </div>
      </div>
    </>
  );
}
