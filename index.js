const express = require("express");
const app = express();
require("dotenv").config();
var cors = require("cors");
const PORT = process.env.PORT || 8000;
const Routes = require("./routes");
const databaseConnect = require("./config/dbConfige");

//middleware
app.use(cors());
app.use(express.json());

app.use(Routes);
// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

const main = async () => {
  await databaseConnect();
  app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
  });
};
main();
