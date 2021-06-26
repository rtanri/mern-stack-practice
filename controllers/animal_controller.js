const { AnimalModel } = require("../models/animal");
const Joi = require("joi");

module.exports = {
  create: (req, res) => {
    // validate
    const schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),
      gender: Joi.string()
        .valid(...EnumAnimalGender)
        .required(),
    });

    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      res.statusCode = 400;
      res.json(validationResult.error);
    }

    const validatedParams = validationResult.value;

    // create animal in DB
    AnimalModel.create({
      name: validatedParams.name,
      species: "placeholder",
      breed: "placeholder",
      image: "placeholder",
      age: 1,
      gender: validatedParams.gender,
    })
      .then(response => {
        res.statusCode = 204;
        res.json();
      })
      .catch(err => {
        res.statusCode = 500;
        res.json(err);
      });
  },
  homepage: (req, res) => {
    res.send("Hello World!");
  },
  listAnimals: async (req, res) => {
    const schema = Joi.object({
      page: Joi.number().min(0).allow("", null),
      per_page: Joi.number().min(0).allow("", null),
    });

    const validationResult = schema.validate(req.query);
    if (validationResult.error) {
      res.statusCode = 400;
      return res.json(validationResult.err);
    }

    const validatedParams = validationResult.value;

    let page = 0;
    let perPage = 20;

    if (validatedParams.page && validatedParams.per_page) {
      let page = validatedParams.page;
      let perPage = validatedParams.per_page;
    }

    let totalCount = 0;
    try {
      totalCount = await AnimalModel.countDocuments();
    } catch (err) {
      res.statusCode = 500;
      return res.json();
    }

    AnimalModel.find()
      .skip(perPage * page)
      .limit(perPage)
      .then(response => {
        return res.json({
          animals: response,
          totalCount: totalCount,
        });
      })
      .catch(err => {
        return res.json(err);
      });
  },
  getAnimal: (req, res) => {
    AnimalModel.findOne({ _id: req.params.animalID })
      .then(response => {
        if (!response) {
          res.statusCode = 404;
          return res.json();
        }

        return res.json(response);
      })
      .catch(err => {
        res.statusCode = 500;
        return res.json(err);
      });
  },

  editForm: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {},
};
