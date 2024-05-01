const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.registerUser); // Redirects to create a user.
router.post('/login', userController.loginUser); // Logs in the user with request body.
router.get('/logout', userController.logoutUser); // Logs out the user in the request.

router.get('/:id', userController.getUser); // Get single user by id
router.post('/', userController.createUser); // Create single user with request body
router.delete('/:id', userController.deleteUser); // Delete single user by id
router.patch('/:id', userController.updateUser); // Update single user by id

router.get('/teams/:id', userController.getTeamsFromUser); // Get teams from the user id.

module.exports = router;