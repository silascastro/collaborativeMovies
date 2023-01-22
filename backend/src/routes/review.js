const express = require('express');
const reviewController = require('../controllers/ReviewController');

const router = express.Router();

router.get('/movies/:movie_id', reviewController.getAllReviewsFromMovie);
router.get('/users/:user_id', reviewController.getAllReviewsFromUser);
router.post('/', reviewController.postReview);
router.put('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
