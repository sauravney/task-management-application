import express from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  showTask,
  updateTask,
} from "../controllers/Task.controller.js";

const Taskrouter = express.Router();

Taskrouter.post("/tasks", createTask);
Taskrouter.get("/tasks", getAllTask);
Taskrouter.get("/show-task/:taskid", showTask);
Taskrouter.put("/update-task/:taskid", updateTask);
Taskrouter.delete("/tasks/:taskid", deleteTask);

export default Taskrouter;
