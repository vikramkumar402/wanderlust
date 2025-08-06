const express = require("express");
const app = express();
const users = require("./routes/user.js");

app.get("/", (req, res) => {
  res.send("Hi, I am root!");
});

app.use("/users", users);

// Posts
// Index
app.get("/posts", (req, res) => {
  res.send("GET for posts");
});

// Show
app.get("/posts/:id", (req, res) => {
  res.send("GET for post id");
});

// POST
app.post("/posts", (req, res) => {
  res.send("POST for users");
});

// delete
app.delete("/posts/:id", (req, res) => {
  res.send("DELETE for post id");
}); 
module.exports =  router;
