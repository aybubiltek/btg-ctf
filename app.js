const path = require("path");
const express = require("express");
var exphbs = require("express-handlebars");
const app = express();
const port = process.env.PORT || 4448;
const hostname = "127.0.0.1";

app.use("/static" ,express.static("assets"));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");


app.get("/", function (req, res) {
  res.render("site/index", {
    layout: "indexLayout",
  });
});


app.get("/register", function (req, res) {
  res.render("site/register", {
    layout: "registerLayout",
  });
});


app.listen(port, () => {
  console.log(`ServerÇalışıyor http://${hostname}:${port}`);
});
