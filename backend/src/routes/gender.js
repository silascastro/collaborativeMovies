const express = require('express');
const genderController = require('../controllers/GenderController');

const router = express.Router();

router.get('/', genderController.getAllGenders);
router.get('/:id', genderController.getOneGender);
router.post('/', genderController.postGender);
router.put('/:id', genderController.updateGender);
router.delete('/:id', genderController.deleteGender);

module.exports = router;
