const mongoose = require("mongoose");
// object destructuring
const { AnimalModel, Fruits } = require("./models/animal");

// const AnimalModel = require("./models/animal.js");

const mongoURI =
  "mongodb+srv://bakery_admin:Pikachu456@cluster0.lq0df.mongodb.net/sunny_shelter";

let data = [
  {
    name: "Pongo",
    species: "dog",
    breed: "Pomerian",
  },
  {
    name: "Luna",
    species: "cat",
    breed: "British Short Hair",
  },
];

let connection = null;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(connResp => {
    connection = connResp;
    return AnimalModel.insertMany(data);
    //     return AnimalModel;
    //     return Fruits;
  })
  .then(insertResp => {
    console.log("successful data insertion");
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    if (connection !== null) {
      connection.disconnect();
    }
  });
