const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const apiUrl = "https://api.ipify.org?format=json";

const fetchMyIP = function (callback) {
  request(apiUrl, (error, response, body) => {
    // console.log(response.statusCode);
    // error can be set if invalid domain, user is offline, etc.
    if (error) return callback(error, null);

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body); // parse the JSON into object

    console.log(data.ip);

    if (!data.ip) callback(error, undefined);
    else callback(null, data.ip);
  });
};

module.exports = { fetchMyIP };
