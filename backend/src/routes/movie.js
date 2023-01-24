const express = require('express');
const movieController = require('../controllers/MovieController');
const uploadImage = require('../config/upload-image');

const router = express.Router();

router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getOneMovie);
router.post('/', uploadImage.single('image'), movieController.postMovie);
router.patch('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
