const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, _response, body) => {

    // Print the response status code if a response was received
    //console.log("statusCode:", response && response.statusCode);
    if (error) {

      //callback expects error first, then data
      callback(error, null);
      //console.log(`Error loading website ${url}`, error);
      return;
    }

    //Instruction  Let's use JSON.parse to convert the JSON string into an actual object.
    const data = JSON.parse(body);

    //if it's empty
    if (data.length === 0) {
      callback("No cats found", null);
      return;
    }

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };