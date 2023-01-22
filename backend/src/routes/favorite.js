const express = require('express');
const favoriteMoviesController = require('../controllers/FavoriteMoviesController');

const router = express.Router();

router.get('/:user_id', favoriteMoviesController.getAllFavoriteMoviesFromUser);
router.post('/', favoriteMoviesController.postFavoriteMovie);
router.put('/:id', favoriteMoviesController.updateFavoriteMovie);
router.delete('/:id', favoriteMoviesController.deleteFavoriteMovie);

module.exports = router;
