const express = require("express");
const app = express();
const port = 3000;
const animalController = require("./controllers/animal_controller");

// Database
const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://bakery_admin:Pikachu456@cluster0.lq0df.mongodb.net/";

// middleware
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
// Make an index route
app.get("/animal", animalController.index);

// make new animal
app.get("animal/new", animalController.new);

// Make a create route
app.post("/animal", animalController.create);

// edit
app.get("/animal/:slug/edit", bakedgoodsController.editForm);
// Make an update route
app.patch("/animal/:slug", animalController.update);
// Make a delete route
app.delete("/deleting-animal", animalController.delete);

app.get("/", animalController.homepage);

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(response => {
    app.listen(port, () => {
      console.log(`Sunny Shelter listening at http://localhost:${port}`);
    });
  });
