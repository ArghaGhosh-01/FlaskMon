const express = require("express");
const fs = require("fs");
const cors = require("cors");
const connectDB = require("./models/db");
const User = require("./models/User");

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use(cors());

// API Task 1
app.get("/api", (req, res) => {
  fs.readFile(__dirname + "/data.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Cannot read file" });
    }
    res.json(JSON.parse(data));
  });
});

// Task 2: Form submission route
app.post("/submit", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.get("/getdata", async (req, res) => {
  try {
    const users = await  User.find();
    res.json(users);
    // console.log(users);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


app.listen(PORT, () => console.log(`Server running on : http://localhost:${PORT}/`));