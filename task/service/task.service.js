const taskRepository = require("../repository/task.repository");
const { v4: uuidv4 } = require("uuid");
module.exports = {
  createTask: async (taskDto) => {
    const { taskName, description } = taskDto.body;
    console.log("taskName:", taskName);
    console.log("description:", description);
    //  Task newTask=new Task(taskName,description);

    const newTask = {
      id: uuidv4(),
      taskName: taskName,
      description: description,
    };

    const dto = await taskRepository.save(newTask);
    return dto;
  },
  getAllTask: async () => {
    const dto = await taskRepository.getAll();
    return dto;
  },
};
