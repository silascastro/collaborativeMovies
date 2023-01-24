const Review = require('../models/review');

exports.postReview = async (req, res, next) => {
  const body = req.body;
  console.log(body);
  await Review.create(body)
    .then(() => {
      res.status(201).json({ message: 'the review has been created' });
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

exports.updateReview = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  await Review.update(body, {
    where: {
      review_id: id,
    },
  })
    .then(() => {
      res.status(201).json({ message: 'the review has been updated' });
    })
    .catch(() => {
      res.status(400).json({ message: 'we have a problem to update a review' });
    });
};

exports.deleteReview = async (req, res, next) => {
  const { id } = req.params;

  await Review.destroy({
    where: {
      review_id: id,
    },
  })
    .then(() => {
      res.status(201).json({ message: 'the review has been removed' });
    })
    .catch(() => {
      res.status(400).json({ message: 'we have a problem to remove a review' });
    });
};
