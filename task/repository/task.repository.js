const fs = require("fs");
const path = require("path");

const filePath = "./db/task.json";

module.exports = {
  save: async (taskDto) => {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]");
    }

    try {
      const existedTasks = fs.readFileSync(filePath, "utf-8");
      let listTask;
      if (!existedTasks) {
        listTask = [];
      }

      listTask = JSON.parse(existedTasks || "[]");
      console.log(listTask);
      listTask.push(taskDto);

      fs.writeFileSync(filePath, JSON.stringify(listTask, null, 2));
      return taskDto;
    } catch (err) {
      console.error(err.message);
    }
  },
  getAll: async () => {
    try {
      const existedTasks = fs.readFileSync(filePath, "utf-8");
      let listTask;
      if (!existedTasks) {
        listTask = [];
      }

      listTask = JSON.parse(existedTasks || "[]");
      return listTask;
    } catch (err) {
      console.error(err.message);
    }
  },
};
