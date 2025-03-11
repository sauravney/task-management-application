import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import ShowTask from "./pages/ShowTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/task-list" element={<TaskListPage />} />
          <Route path="/show-task/:taskid" element={<ShowTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
