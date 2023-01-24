const express = require('express');
const reviewController = require('../controllers/ReviewController');

const router = express.Router();

router.post('/', reviewController.postReview);
router.put('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
