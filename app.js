const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=ac15f8d48dc4a623bcb53051e939c9bb&query=New%20York";

request({ url: url, json: true }, (error, response) => {
  const data = response.body;
  //   const data = JSON.parse(response.body);
  const temperature = data.current.temperature;
  const feelsLike = data.current.feelslike;
  console.log(
    `The current temperature is ${temperature} but it feels like ${feelsLike}`
  );
});
