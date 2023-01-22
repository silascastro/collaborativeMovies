const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser);
router.post('/', userController.postUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
