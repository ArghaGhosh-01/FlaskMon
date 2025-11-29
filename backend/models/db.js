const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://dubaiking:VunkqgWavIR3VuX0@cluster.k8srxkd.mongodb.net/?appName=Cluster");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

module.exports = connectDB;


// mongodb+srv://dubaiking:<db_password>@cluster.k8srxkd.mongodb.net/?appName=Cluster