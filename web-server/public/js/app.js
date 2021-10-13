// const { response } = require("express");
// Template engine to render dynamic web pages using Express
// Handlebars - create code we can reuse across pages npm (handlebars package) hbs library

// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.getElementById("message-one");
const messageTwo = document.getElementById("message-two");

// messageOne.textContent = "From Javascript";
messageTwo.textContent = "";

weatherForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default behavior, refresh the browser.
  const location = search.value;

  // Fetch the data from the url
  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          console.log(data.error);
          messageTwo.textContent = data.error;
          setTimeout(() => {
            messageTwo.textContent = "";
          }, 5000);
        } else {
          console.log(data);
          messageOne.textContent = `Location: ${data.location}, the longitude is: ${data.longitude} and latitude: ${data.latitude}`;
          messageTwo.textContent = `${data.forecast}`;
        }
      });
    }
  );
});
