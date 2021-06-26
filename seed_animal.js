const mongoose = require("mongoose");
// object destructuring
const { AnimalModel, Fruits } = require("./models/animal");

// const AnimalModel = require("./models/animal.js");

const mongoURI =
  "mongodb+srv://bakery_admin:Pikachu456@cluster0.lq0df.mongodb.net/sunny_shelter";

let data = [
  {
    name: "Jim",
    species: "Cat",
    breed: "British Short Hair",
    //enum allow schema to use defined-array on top
    gender: "f",
    age: 1,
    adopted: false,
  },
  {
    name: "Jess",
    species: "Cat",
    breed: "British Short Hair",
    //enum allow schema to use defined-array on top
    gender: "f",
    age: 1,
    adopted: false,
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
