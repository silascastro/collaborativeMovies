const FavoriteMovie = require('../models/favorite-movie');

exports.getAllFavoriteMoviesFromUser = async (req, res, next) => {
  const { user_id } = req.params;
  const favoriteMovies = await FavoriteMovie.findAll({
    where: {
      favorite_user_id: user_id,
    },
  });
  return res.json(favoriteMovies);
};

exports.postFavoriteMovie = async (req, res, next) => {
  const body = req.body;
  await Gender.create(body)
    .then(() => {
      res.status(201).json({ message: 'the gender has been created' });
    })
    .catch(() => {
      res.status(400).json({ message: 'we have a problem to create a gender' });
    });
};

exports.updateFavoriteMovie = async (req, res, next) => {
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

exports.deleteFavoriteMovie = async (req, res, next) => {
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
