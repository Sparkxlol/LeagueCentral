const express = require('express');
const teamController = require('../controllers/teamController');

const router = express.Router();

router.get('/:id', teamController.getTeam); // Get single team by id
router.post('/', teamController.createTeam); // Create team with given information (excludes players)
router.patch('/add/:id', teamController.addPlayerToTeam); // Adds a player to the team with the given id.

module.exports = router;