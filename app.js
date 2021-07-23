//requiring express
const express = require("express");
const todoController = require("./controllers/todoController");

const app = express();

//setting ejs as view engine
app.set("view engine", "ejs");

//set up to serve static files from ./public folder, with static middleware
app.use(express.static("./public"));

//controllers
todoController(app);

// hey app, listen to this port
app.listen(3000);
console.log("You are listening to port 3000");
