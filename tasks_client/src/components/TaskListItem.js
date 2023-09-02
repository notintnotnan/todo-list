import { useNavigate } from "react-router-dom";

export default function TaskListItem(props) {
  const doneMarker = props.done ? "-success" : "-secondary";
  const doneText = props.done ? "Done" : "Undone";

  const navigate = useNavigate();

  return (
    <>
      <div className="container taskItemCard">
        <div className="row taskItemHead">
          <h3
            onClick={() => {
              navigate(`/todo_tasks/${props.taskId}`);
            }}
          >
            <span>#{props.taskId} </span>
            {props.taskTitle}
          </h3>
        </div>
        <div className="row taskItemBody">
          <p>{props.taskDesc}</p>
        </div>
        <div className="row taskItemFooter">
          <div className="col-3">
            <span className={`badge bg${doneMarker}`}>{doneText}</span>
          </div>
          <div className="col-9">{/*TODO: Add task labels.*/}</div>
        </div>
      </div>
    </>
  );
}
