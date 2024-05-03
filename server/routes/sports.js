const express = require('express');
const sportController = require('../controllers/sportController');

const router = express.Router();

router.post('/', sportController.createSport); // Create sport with given information
router.get('/', sportController.getSports) // Gets all sports.

module.exports = router;