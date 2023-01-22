const User = require('../models/user');

exports.getAllUsers = async (req, res, next) => {
  const users = await User.findAll();
  return res.json(users);
};

exports.getOneUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  return res.json(user);
};

exports.postUser = async (req, res, next) => {
  const body = req.body;

  await User.create(body)
    .then(() => {
      res.status(201).json({ message: 'the user has created' });
    })
    .catch(() => {
      res.status(400).json({ message: 'we have a problem to create a user' });
    });
};

exports.updateUser = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  await User.update(body, {
    where: {
      user_id: id,
    },
  })
    .then(() => {
      res.status(201).json({ message: 'the user has been updated' });
    })
    .catch(() => {
      res.status(400).json({ message: 'we have a problem to update user' });
    });
};

exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  await User.destroy({
    where: {
      user_id: id,
    },
  })
    .then((response) => {
      console.log(response);
      res.json({ message: 'the user has been removed' });
    })
    .catch((err) => {
      res.json({ message: 'we have a problem' });
    });
};
