const express = require('express');
const movieController = require('../controllers/MovieController');

const router = express.Router();

router.get('/', movieController.getAllMovies);
router.get('/gender/:gender_id', movieController.getAllMoviesByGender);
router.get('/:id', movieController.getOneMovie);
router.post('/', movieController.postMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
