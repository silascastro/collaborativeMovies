const Actor = require('../models/actor');

exports.getAllActors = async (req, res, next) => {
  const actors = await Actor.findAll();
  return res.json(actors);
};

exports.getOneActor = async (req, res, next) => {
  const { id } = req.params;
  const actor = await Actor.findByPk(id);
  return res.json(actor);
};

exports.postActor = async (req, res, next) => {
  const body = req.body;

  await Actor.create(body)
    .then(() => {
      res.status(201).json({ message: 'the actor has created' });
    })
    .catch(() => {
      res.status(400).json({ message: 'we have a problem to create a actor' });
    });
};

exports.updateActor = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  await Actor.update(body, {
    where: {
      actor_id: id,
    },
  })
    .then(() => {
      res.status(201).json({ message: 'the actor has been updated' });
    })
    .catch(() => {
      res.status(400).json({ message: 'we have a problem to update actor' });
    });
};

exports.deleteActor = async (req, res, next) => {
  const { id } = req.params;

  await Actor.destroy({
    where: {
      actor_id: id,
    },
  })
    .then((response) => {
      console.log(response);
      res.json({ message: 'the actor has been removed' });
    })
    .catch((err) => {
      res.json({ message: 'we have a problem' });
    });
};
