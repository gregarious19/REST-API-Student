const express = require("express");
const studentRoutes = require("./src/student/routes.js");
const app = express();

const port = 3001;

app.use("/api/v1/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("hello World");
});

app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});
