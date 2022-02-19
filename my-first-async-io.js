fs = require("fs");
fs.readFile(process.argv[2], "utf8", (err, texts) => {
  if (err) console.log("error:", err);
  else console.log(texts.split("\n").length - 1);
});