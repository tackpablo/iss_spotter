const request = require("request");

const { nextISSTimesForMyLocation } = require("./iss");

// const {
//   fetchMyIP,
//   fetchCoordsByIP,
//   fetchISSFlyOverTimes,
//   nextISSTimesForMyLocation,
// } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work (IP)!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("173.180.243.253", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work (Geolocation)!", error);
//     return;
//   }

//   console.log("It worked! Returned Geolocation:", coordinates);
// });

// const exampleCoords = { latitude: "49.2635", longitude: "-122.9331" };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work (Coords)!", error);
//     return;
//   }

//   console.log("It worked! Returned flyover times: ", passTimes);
// });

/**
 * Input:
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns:
 *   undefined
 * Sideffect:
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
