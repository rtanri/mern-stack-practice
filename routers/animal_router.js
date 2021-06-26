const express = require("express");
const app = express();
const router = express.Router();
const animalController = require("../controllers/animal_controller");

// Make an index route
app.get("/animal", animalController.index);

// make new animal
app.get("animal/new", animalController.new);

// Make a create route
app.post("/animal", animalController.create);

// edit
app.get("/animal/:slug/edit", animalController.editForm);
// Make an update route
app.patch("/animal/:slug", animalController.update);
// Make a delete route
app.delete("/deleting-animal", animalController.delete);

app.get("/", animalController.homepage);

module.exports = router;
