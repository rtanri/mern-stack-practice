const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: { type: String },
  species: { type: String },
  breed: { type: String },
  sex: { type: String },
  image: { type: String },
  age: { type: Number },
  adopted: { type: Boolean },
});

const AnimalModel = mongoose.model("animals", animalSchema);

module.exports = {
  AnimalModel: AnimalModel,
};
