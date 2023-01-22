const express = require('express');
const characterController = require('../controllers/CharacterController');

const router = express.Router();

router.get('/movies/:actor_id', characterController.getAllMoviesFromActor);
router.get('/actor/:movie_id', characterController.getAllCharactersFromMovies);
router.get('/:id', characterController.deleteCharacter);

module.exports = router;
