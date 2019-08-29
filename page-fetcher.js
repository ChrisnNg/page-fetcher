const request = require('request');
const getArgv = process.argv.splice(2);
const fs = require('fs');

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



