let express = require("express");
let app = express();
require("dotenv").config();
absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  return process.env.MESSAGE_STYLE === "uppercase"
    ? res.json({ message: "Hello json".toUpperCase() })
    : res.json({ message: "Hello json" });
});

module.exports = app;
