import { useNavigate } from "react-router-dom";

export default function TaskListItem(props) {
  const doneMarker = props.done ? "-success" : "-secondary";
  const doneText = props.done ? "Done" : "Undone";

  const navigate = useNavigate();

  return (
    <>
      <div className="row">
        <h3
          onClick={() => {
            navigate(`/todo_tasks/${props.taskId}`);
          }}
        >
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
