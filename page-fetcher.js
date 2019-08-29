const request = require('request');
const getArgv = process.argv.splice(2);
const fs = require('fs');


// const write = function(callback, path) {
//   fs.writeFile(path, callback, () => {
//     console.log("the webpage has been downloaded");
//   });

// };


// const fetcher = function(url, path) {
//   // request(getArgv, (error, response, body) => {
//   //   console.log('error:', error); // Print the error if one occurred
//   //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   //   console.log('body:', body); // Print the HTML for the Google homepage.
//   //   return body;
//   // });
//   write(request(getArgv, (body) => {
//     return body;
//   }), path);
// };



const fetcher = function(url, path) {
  const write = function(callback) {
    fs.writeFile(path, callback, () => {
      console.log("the webpage has been downloaded");
    });
  };
  request(url, (error, response, body) => {
    if (error === null || error >= 200 && error <= 300) {
      write(body);
    } else console.log(`Error ${error} detected. File will not be written to`);
  });
};

fetcher(getArgv[0], getArgv[1]);



