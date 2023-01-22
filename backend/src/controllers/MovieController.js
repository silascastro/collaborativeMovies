const Movie = require('../models/movie');

exports.getAllMovies = async (req, res, next) => {
  const movies = await Movie.findAll();
  return res.json(movies);
};

exports.getAllMoviesByGender = async (req, res, next) => {
  const { gender_id } = req.params;
  const movies = await Movie.findAll({
    where: {
      gender_id,
    },
  });
  return res.json(movies);
};

exports.getOneMovie = async (req, res, next) => {
  const { id } = req.params;
  const movie = await Movie.findByPk(id);
  return res.json(movie);
};

exports.postMovie = async (req, res, next) => {
  const body = req.body;
  await Movie.create(body)
    .then(() => {
      res.status(201).json({ message: 'the movie has been created' });
    })
    .catch(() => {
      res.status(400).json({ message: 'we have a problem to create a movie' });
    });
};

exports.updateMovie = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  await Movie.update(body, {
    where: {
      movie_id: id,
    },
  })
    .then(() => {
      res.status(201).json({ message: 'the movie has been updated' });
    })
    .catch(() => {
      res.status(400).json({ message: 'we have a problem to update a movie' });
    });
};

exports.deleteMovie = async (req, res, next) => {
  const { id } = req.params;

  await Movie.destroy({
    where: {
      movie_id: id,
    },
  })
    .then(() => {
      res.status(201).json({ message: 'the movie has been removed' });
    })
    .catch(() => {
      res.status(400).json({ message: 'we have a problem to remove a movie' });
    });
};
