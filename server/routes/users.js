const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/:id', userController.getUser); // Get single user by id
router.post('/', userController.createUser); // Create single user with request body
router.delete('/:id', userController.deleteUser); // Delete single user by id
router.patch('/:id', userController.updateUser); // Update single user by id

module.exports = router;