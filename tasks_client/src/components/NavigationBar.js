import { Link } from "react-router-dom";
export default function NavigationBar(props) {
  return (
    <>
      <div>
        <Link to="/">
          <h1>TODO Task list</h1>
        </Link>
        <Link to="/todo_tasks_create">Create Task</Link>
      </div>
    </>
  );
}
