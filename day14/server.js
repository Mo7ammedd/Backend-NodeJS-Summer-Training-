const express = require("express");
const fs = require("fs");
const path = require("path");
const userfile = path.join(__dirname, "user.json");
const users = require("./user.json");
const app = express();
const port = 5650;
let id = 0;

app.use(express.json());

app.post("/user", (req, res) => {
  const { name, age } = req.body;
  const newUser = {
    id: users.length + 1,
    name: name,
    age: age,
  };
app.get("/user", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (!user) {
    res.status(404).send("ERROR!!(NOUR).");
  } else {
    res.send(user);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
