fs = require("fs");
module.exports = function (path, extension, callback) {
  fs.readdir(path, (err, list) => {
    if (err) callback(err);
    else {
      const file = list.filter((item) => item.endsWith("." + extension));
      callback(null, file);
    }
  });
};
