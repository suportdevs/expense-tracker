// externam imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");

// use middlewares
app.use(express.json());
dotenv.config();

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is runging  on port ${process.env.PORT}`);
});
