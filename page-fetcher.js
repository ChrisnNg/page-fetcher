
const request = require('request');
const getArgv = process.argv.splice(2);
const fs = require('fs');

const fetcher = function(url, path) {
  const write = function(callback) {
    fs.writeFile(path, callback, (error) => {
      if (error) {
        console.log(`${error} \nWriteFile could not be completed.`);
        process.exit;
      } else console.log(`the webpage has been downloaded at ${path}`);
    });
  };
  request(url, (error, response, body) => {
    if (error === null || response.statusCode >= 200 && response.statusCode <= 300) {
      write(body);
    } else console.log(`Error ${error} detected. File will not be written to`);
  });
};

fetcher(getArgv[0], getArgv[1]);
