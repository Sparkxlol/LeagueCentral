const express = require('express');
const matchController = require('../controllers/matchController');

const router = express.Router();

router.get('/:id', matchController.getMatch); // Get single match by id
router.post('/', matchController.createMatch); // Create match with given information (includes players)

module.exports = router;