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

  const movies = await Character.findAll({
    where: {
      character_actor_id: actor_id,
    },
  });

  movies;
  return res.json(characters);
};
