const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./DB/connection");
app.use(express.json());
//const User = require("./Models/userSchema");
app.use(require("./routes/auth"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server is running at port " + PORT);
});
