const mongoose = require("mongoose");

const GenderMale = "m";
const GenderFemale = "f";
const EnumAnimalGender = [GenderMale, GenderFemale];

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String, required: true },
  //enum allow schema to use defined-array on top
  gender: { type: String, required: true, enum: EnumAnimalGender },
  image: { type: String },
  age: { type: Number, required: true, min: 0 },
  adopted: { type: Boolean, required: true, default: false },
});

const AnimalModel = mongoose.model("Animal", schema);

module.exports = {
  AnimalModel: AnimalModel,
  GenderMale,
  GenderFemale,
  EnumAnimalGender,
};
