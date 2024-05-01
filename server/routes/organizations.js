const express = require('express');
const organizationController = require('../controllers/organizationController');

const router = express.Router();

router.get('/:id', organizationController.getOrganization); // Gets the organization with the id.
router.post('/', organizationController.createOrganization); // Create organization with given information

module.exports = router;