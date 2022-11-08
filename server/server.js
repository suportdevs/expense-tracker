// externam imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Internal imports
const category = require("./routes/category");

// use middlewares
app.use(express.json());
dotenv.config();

// database connection
mongoose
  .connect(process.env.DATABASE_CONNECTION_URI, {})
  .then(() => {
    console.log("Database connection successful.");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", category);


app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is runging  on port ${process.env.PORT}`);
});
