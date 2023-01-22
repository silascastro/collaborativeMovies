const express = require('express');
const actorController = require('../controllers/ActorController');

const router = express.Router();

router.get('/', actorController.getAllActors);
router.get('/:id', actorController.getOneActor);
router.get('/', actorController.postActor);
router.get('/:id', actorController.updateActor);
router.get('/:id', actorController.deleteActor);

module.exports = router;
