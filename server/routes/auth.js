const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', authController.getJWT); // Create organization with given information

module.exports = router;