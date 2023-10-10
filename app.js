import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let newItems = [];

app.get("/", (req, res) => {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today  = new Date();
  var day = today.toLocaleDateString("en-US", options);
  res.render("list", {kindOfDay: day, newListItems: newItems});
});

app.post('/', (req, res) => {
  let newItem = req.body.newItem;
  newItems.push(newItem);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});