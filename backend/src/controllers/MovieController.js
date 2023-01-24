const Movie = require('../models/movie');
const Review = require('../models/review');

exports.getAllMovies = async (req, res, next) => {
  const movies = await Movie.findAll({
    include: [
      {
        model: Review,
      },
    ],
  });
  return res.json(movies);
};

exports.getOneMovie = async (req, res, next) => {
  const { id } = req.params;
  const movie = await Movie.findByPk(id, {
    include: [
      {
        model: Review,
      },
    ],
  });
  return res.json(movie);
};

exports.postMovie = async (req, res, next) => {
  const body = req.body;

  await Movie.create(body)
    .then(() => {
      res.status(201).json({ message: 'the movie has been created' });
    })
    .catch((err) => {
      res.status(400).json({ message: err });
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
