const directoryReading = require("./directory.js");
const directory = process.argv[2];
const filterExtension = process.argv[3];

const callback = (err, list) => {
  if (err) throw err;
  list.forEach(function (file) {
    console.log(file);
  });
};
dirReading(dir, filterExtension, callback);
