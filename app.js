// Asynchronous Node.js
//
// Require the geocode function
const geocode = require("./utils/geocode");
//
// Require the forecast function
const forecast = require("./utils/forecast");

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

// const url2 =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/LosAngeles.json?access_token=pk.eyJ1IjoidWx0cmFzb2Z0IiwiYSI6ImNrbnM1cHkzeTAzODgycXMxemdpN3h6YzYifQ.k87LpRwQe8htBBBoDtCcOA";

// // 2. Have the request module parse it as JSON
// // 3. Print both the latitude and longitude to the terminal
// request({ url: url2, json: true }, (error, response) => {
//   // Low-level error
//   if (error) {
//     console.log("Unable to connect to Geocoding");
//   } else if (response.body.features.length === 0) {
//     console.log(
//       `Unable to find the location on Geocoding, query ${response.body.query[0]} not valid`
//     );
//   } else {
//     const data2 = response.body;
//     const longitude = data2.features[0].center[0];
//     const latitud = data2.features[0].center[1];
//     console.log(
//       `The longitude of los Angeles is ${longitude} and the latitud is ${latitud}`
//     );
//   }
// });

// Refactoring the geocode program with callbacks, reusable function
//
// Geocode function
// const geocode = (address, callback) => {
//   const url =
//     "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//     encodeURIComponent(address) +
//     ".json?access_token=pk.eyJ1IjoidWx0cmFzb2Z0IiwiYSI6ImNrbnM1cHkzeTAzODgycXMxemdpN3h6YzYifQ.k87LpRwQe8htBBBoDtCcOA";

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to location services!", undefined);
//     } else if (response.body.features.length === 0) {
//       callback("Unable to find the location on Geocoding", undefined);
//     } else {
//       callback(undefined, {
//         latitude: response.body.features[0].center[0],
//         latitud: response.body.features[0].center[1],
//         place: response.body.features[0].place_name,
//       });
//     }
//   });
// };

// Goal: Accept location via command line argument
//
// console.log(process.argv); To check the arguments in the console -> test with: node app.js "Something"

const address = process.argv[2];
// If there is not info on the argv[2] (!address)

if (!address) {
  console.log("Please provide a location");
} else {
  // The caller: geocode and destructuring the data into latitude, longitude and location
  geocode(address, (error, {latitude, longitude, location }) => {
    // Handling errors
    if (error) {
      return console.log(error);
    }
    // Callback Channing
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location, forecastData);
    });
  });
}
