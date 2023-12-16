const taskController = require("../task/controller/task.controller");
const taskRouter = require("express").Router();
taskRouter.post("/task", taskController.createTask);
taskRouter.get("/task", taskController.getTask);
module.exports = taskRouter;
