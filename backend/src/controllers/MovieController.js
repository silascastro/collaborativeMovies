const Movie = require('../models/movie');
const Gender = require('../models/gender');
const User = require('../models/user');

exports.getAllMovies = async (req, res, next) => {
  const movies = await Movie.findAll({
    include: [
      {
        model: Gender,
      },
      {
        model: User,
        attributes: ['user_id'],
      },
    ],
  });
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
  const { file } = req;
  console.log(req.file);

  if (!file) {
    res.status(404).send({ message: 'No image found' });
  } else {
    const data = {
      movie_name: req.body.movie_name,
      movie_description: req.body.movie_description,
      movie_director: req.body.movie_director,
      movie_image: file.filename,
      gender_id: req.body.gender_id,
    };
    console.log(data);
    await Movie.create(data)
      .then(() => {
        res.status(201).json({ message: 'the movie has been created' });
      })
      .catch((err) => {
        res.status(400).json({ message: err });
      });
  }
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
