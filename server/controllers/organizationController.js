const Organization = require('../models/Organization');
const mongoose = require('mongoose');
const utilities = require('./utlities');

// CREATE the organization with the given request body parameters.
const createOrganization = async (req, res) => {
    const { name, email, userName, password, phone, profilePicture } = req.body;

    try {
        const organization = await Organization.create({ 
            name, email, userName, password, phone, profilePicture
        });

        res.status(200).json(organization);
    }
    catch (error) { return utilities.returnError(res, 400, error.message) };
}

module.exports = { createOrganization };