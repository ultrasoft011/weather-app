// Asynchronous Node.js
const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=ac15f8d48dc4a623bcb53051e939c9bb&query=New%20York";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     // Low level error
//     console.log("Unable to connect to weatherstack, please try later..");
//   } else if (response.body.error) {
//     // Error relate with the API
//     console.log("Unable to find the location");
//   } else {
//     const data = response.body;
//     //   const data = JSON.parse(response.body);
//     const temperature = data.current.temperature;
//     const feelsLike = data.current.feelslike;
//     console.log(
//       `The current temperature is ${temperature} but it feels like ${feelsLike}`
//     );
//   }
// });

// Geocoding
// Goal: Print the lat/long for los Angeles
//
// 1. Fire off a new request to the URL explored in browser

const url2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/LosAngeles.json?access_token=pk.eyJ1IjoidWx0cmFzb2Z0IiwiYSI6ImNrbnM1cHkzeTAzODgycXMxemdpN3h6YzYifQ.k87LpRwQe8htBBBoDtCcOA";

// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal
request({ url: url2, json: true }, (error, response) => {
  // Low-level error
  if (error) {
    console.log("Unable to connect to Geocoding");
  } else if (response.body.features.length === 0) {
    console.log(
      `Unable to find the location on Geocoding, query ${response.body.query[0]} not valid`
    );
  } else {
    const data2 = response.body;
    const longitude = data2.features[0].center[0];
    const latitud = data2.features[0].center[1];
    console.log(
      `The longitude of los Angeles is ${longitude} and the latitud is ${latitud}`
    );
  }
});
