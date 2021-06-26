const { AnimalModel } = require("../models/animal");

module.exports = {
  homepage: (req, res) => {
    res.send("Hello World!");
  },
  index: (req, res) => {},
  new: (req, res) => {},
  create: (req, res) => {
    // validate
    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),
      gender: Joi.string(),
    });
  },
  editForm: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {},
};
