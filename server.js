const express = require("express");
const taskRouter = require("./router/route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/", taskRouter);
app.listen(3000, () => {
  console.log("server is starting at 3000");
});
