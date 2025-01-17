const express = require('express');
const matchController = require('../controllers/matchController');

const router = express.Router();

router.get('/organization/:id', matchController.getOrganizationFromMatch) // Returns organization by match id.
router.get('/teams/:id', matchController.getTeamsFromMatch); // Returns a list of teams by match id.
router.get('/complete/:id', matchController.getMatchComplete); // Returns the match with players and teams.
router.get('/:id', matchController.getMatch); // Get single match by id
router.patch('/:id', matchController.updateMatch); // Get single match by id
router.post('/', matchController.createMatch); // Create match with given information (includes players)

module.exports = router;