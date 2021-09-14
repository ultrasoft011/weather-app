// Request library to call API's
const request = require("request");

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (x, y, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=ac15f8d48dc4a623bcb53051e939c9bb&query=" +
    y +
    "," +
    x;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback(
        "Unable to connect to the API",
        "Unable to connect to the API",
        undefined
      );
    } else if (response.body.error) {
      callback("Unable to connect to the weatherstack", undefined);
    } else {
      callback(undefined, {
        name: response.body.location.name,
        lon: response.body.location.lat,
        lat: response.body.location.lon,
        time: response.body.location.localtime,
      });
    }
  });
};

// Export the module forecast

module.exports = forecast;
