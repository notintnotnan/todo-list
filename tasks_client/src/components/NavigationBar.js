import { Link } from "react-router-dom";
export default function NavigationBar(props) {
  return (
    <>
      <div className="row align-items-center customNavbar">
        <Link to="/" className="col-6">
          <h1>TODOs</h1>
        </Link>
        <Link to="/todo_tasks" className="col-3">
          View Tasks
        </Link>
        <Link to="/todo_tasks_create" className="col-3">
          Create Task
        </Link>
      </div>
    </>
  );
}
