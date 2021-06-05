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
    title: (headerTitle = () => "AnaSayfa"),
    cssName: (cssName1 = () => "index"),
  });
});


app.listen(port, () => {
  console.log(`ServerÇalışıyor http://${hostname}:${port}`);
});
