const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    // Use your own MongoDB connection string
    const connectionString = process.env.DB_URI;

    await mongoose.connect(connectionString);

    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = connectToDatabase;
