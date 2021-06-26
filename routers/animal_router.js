const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animal_controller");

// Make an index route
router.get("/", animalController.listAnimals);

// Make a create route
router.post("/animal", animalController.create);

// edit
router.get("/animal/:name/edit", animalController.editForm);
// Make an update route
router.patch("/animal/:name", animalController.update);
// Make a delete route
router.delete("/deleting-animal", animalController.delete);

router.get("/", animalController.homepage);

module.exports = router;
