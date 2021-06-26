const { AnimalModel } = require("../models/animal");

module.exports = {
  homepage: (req, res) => {
    res.send("Hello World!");
  },
  index: (req, res) => {},
  new: (req, res) => {},
  create: (req, res) => {},
  editForm: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {},
};
