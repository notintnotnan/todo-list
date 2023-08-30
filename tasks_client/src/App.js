import "./styling/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ViewTasks from "./views/ViewTasks";
import CreateTasks from "./views/CreateTasks";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Navigate to="/todo_tasks" />}></Route>
        <Route path="/todo_tasks" element={<ViewTasks />}></Route>
        <Route path="/todo_tasks_create" element={<CreateTasks />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
