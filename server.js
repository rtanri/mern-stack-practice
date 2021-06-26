const express = require("express");
const app = express();
const port = 3000;

// Database
const mongoose = require("mongoose");
const mongoURI = "";
mongoose.connect(mongoURI, { useNewUrlParser: true });

// middleware
app.use(express.json());
app.use(express.urlencoded());

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// starting port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
