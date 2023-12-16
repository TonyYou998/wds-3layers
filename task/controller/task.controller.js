const taskService = require("../service/task.service");

module.exports = {
  createTask: async (req, res) => {
    const dto = await taskService.createTask(req);

    res.status(201).send(dto);
  },
  getTask: async (req, res) => {
    const dto = await taskService.getAllTask();
    res.status(200).send(dto);
  },
};
