const Gender = require('../models/gender');

exports.getAllGenders = async (req, res, next) => {
  const genders = await Gender.findAll();
  return res.json(genders);
};

exports.getOneGender = async (req, res, next) => {
  const { id } = req.params;
  const gender = await Gender.findByPk(id);
  return res.json(gender);
};

exports.postGender = async (req, res, next) => {
  const body = req.body;
  await Gender.create(body)
    .then(() => {
      res.status(201).json({ message: 'the gender has been created' });
    })
    .catch(() => {
      res.status(400).json({ message: 'we have a problem to create a gender' });
    });
};

exports.updateGender = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  await Gender.update(body, {
    where: {
      gender_id: id,
    },
  })
    .then(() => {
      res.status(201).json({ message: 'the gender has been updated' });
    })
    .catch(() => {
      res.status(400).json({ message: 'we have a problem to update a gender' });
    });
};

exports.deleteGender = async (req, res, next) => {
  const { id } = req.params;

  await Gender.destroy({
    where: {
      gender_id: id,
    },
  })
    .then(() => {
      res.status(201).json({ message: 'the gender has been removed' });
    })
    .catch(() => {
      res.status(400).json({ message: 'we have a problem to remove a gender' });
    });
};
