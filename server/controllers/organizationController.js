const Organization = require('../models/Organization');
const mongoose = require('mongoose');
const utilities = require('./utilities');

// RETRIEVE the organization with the given id, or an error message.
const getOrganization = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return utilities.returnError(res, 404, 'No such organization exists');
    }

    const organization = await Organization.findById(id);

    if (!organization) {
        return utilities.returnError(res, 404, 'No such organization exists');
    }

    res.status(200).json(organization);
}

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

module.exports = { getOrganization, createOrganization };
