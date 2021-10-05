// const { response } = require("express");

console.log("Ultra");

// Template engine to render dynamic web pages using Express
// Handlebars - create code we can reuse across pages npm (handlebars package) hbs library

fetch("http://puzzle.mead.io/puzzle").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});


// Fetch the data from the url
fetch("http://localhost:3000/weather?address=Medellin").then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data);
    }
  });
});
