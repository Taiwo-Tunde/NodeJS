fs = require("fs");
fs.readdir(process.argv[2], (err, list) => {
  if (err) console.log("error:", err);
  else {
    const texts = list.filter((item) => item.endsWith("." + process.argv[3]));
    texts.forEach(function (element) {
      console.log(element);
    });
  }
});
