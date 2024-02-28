require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectToDatabase = require("./db/dbConfig");
const questionRoutes = require("./routes/questionRoutes");
var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

connectToDatabase();
// Use routes
app.use("/questions", questionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
