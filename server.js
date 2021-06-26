const express = require("express");
const app = express();
const port = 3000;
const animalRouter = require("./routers/animal_router");

// Database
const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://bakery_admin:Pikachu456@cluster0.lq0df.mongodb.net/sunny_shelter";

// middleware
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/animals", animalRouter);

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(response => {
    app.listen(port, () => {
      console.log(`Sunny Shelter listening at http://localhost:${port}`);
    });
  });
