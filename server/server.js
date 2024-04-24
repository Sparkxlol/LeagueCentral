require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Paths to route to for each subsection.
const userRoutes = require('./routes/users');
const leagueRoutes = require('./routes/leagues');
const sportRoutes = require('./routes/sports');
const organizationRoutes = require('./routes/organizations');

// Set up PORT and express.
const PORT = 3001;
const app = express();

// Output information in JSON.
app.use(express.json());

// Use initial path + routes.
app.use('/api/users', userRoutes);
app.use('/api/leagues', leagueRoutes);
app.use('/api/sports', sportRoutes);
app.use('/api/organizations', organizationRoutes);

// Attempt to connect to MongoDB.
mongoose.connect(process.env.MongoDBLink)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on ${PORT}`);
        })
    })
    .catch((error) => console.log(error));