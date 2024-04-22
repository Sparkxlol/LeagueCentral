const express = require('express');
const leagueController = require('../controllers/leagueController');

const router = express.Router();

router.get('/active', leagueController.getActiveLeagues); // Get active leagues by organization
router.post('/', leagueController.createLeague); // Create league with given information

module.exports = router;