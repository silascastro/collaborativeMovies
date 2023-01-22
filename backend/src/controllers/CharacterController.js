const Character = require('../models/character');

exports.getAllCharactersFromMovies = async (req, res, next) => {
  const { movie_id } = req.params;

  const characters = await Character.findAll({
    where: {
      character_movie_id: movie_id,
    },
  });
  return res.json(characters);
};

exports.getAllMoviesFromActor = async (req, res, next) => {
  const { actor_id } = req.params;

  const character = await Character.findAll({
    where: {
      character_actor_id: actor_id,
    },
  });
  return res.json(character);
};

exports.deleteCharacter = async (req, res, next) => {
  const { id } = req.params;

  await Gender.destroy({
    where: {
      character_id: id,
    },
  })
    .then(() => {
      res.status(201).json({ message: 'the character has been removed' });
    })
    .catch(() => {
      res
        .status(400)
        .json({ message: 'we have a problem to remove the character' });
    });
};
