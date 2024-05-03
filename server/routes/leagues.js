const express = require('express');
const leagueController = require('../controllers/leagueController');

const router = express.Router();

router.get('/matches/:id', leagueController.getMatchesFromLeague); // Get matches with the given league id.
router.get('/active', leagueController.getActiveLeagues); // Get active leagues by organization
router.get('/:id', leagueController.getLeague); // Get league by id
router.post('/', leagueController.createLeague); // Create league with given information

module.exports = router;