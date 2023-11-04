// externam imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
var cors = require("cors");

// Internal imports
const category = require("./routes/category");
const transaction = require("./routes/transaction");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());
// use middlewares
app.use(express.json());
dotenv.config();

// database connection
mongoose
  .connect(process.env.DATABASE_CONNECTION_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Database connection successful.");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/category", category);

app.use("/transaction", transaction);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is runging  on port ${process.env.PORT}`);
});
