const request = require("request");


const arg = process.argv.slice(2, 3);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${arg}`;

const makeRequest = (url) => {
  console.log("url:", url);
  request(url, (error, response, body) => {

    // Print the response status code if a response was received
    console.log("statusCode:", response && response.statusCode);
    if (error) {
      console.log(`Error loading website ${url}`, error);
      return;
    }

    //all gucci
    console.log(typeof body);

    //Instruction  Let's use JSON.parse to convert the JSON string into an actual object.
    const data = JSON.parse(body);

    //if it's empty
    if (data.length === 0) {
      console.log("No cats found.  Meow.");
      return;
    }

    console.log("first entry:", data[0].description);
  });
};

makeRequest(url);