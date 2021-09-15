// New express application
//
const express = require("express");
// Variable to store the application
//
const app = express();
//
// app.com (root rout)
// app.com/help
// app.com/about
//
// .get method: 1st argument is the rute (partial url), 2nd argument a function that describes what's going to happen when an user visit the partial url
app.get("", (req, res) => {
  res.send("Hello Express!");
});
//
app.get("/help", (req, res) => {
  res.send("Help page");
});
//
// Challange: set an about route and render a page title
app.get("/about", (req, res) => {
  res.send("About page");
});
//
// Challenge: set a weather route and render a page title
app.get("/weather", (req, res) => {
  res.send("Weather is going to be here");
});
// To starts up the server with listen method
app.listen(3000, () => {
  console.log("Server is ON");
});
