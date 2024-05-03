require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Paths to route to for each subsection.
const userRoutes = require('./routes/users');
const leagueRoutes = require('./routes/leagues');
const sportRoutes = require('./routes/sports');
const organizationRoutes = require('./routes/organizations');
const matchRoutes = require('./routes/matches');
const teamRoutes = require('./routes/teams');
const authRoutes = require('./routes/auth');

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
app.use('/api/matches', matchRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/auth', authRoutes);

// Attempt to connect to MongoDB.
mongoose.connect(process.env.MongoDBLink)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on ${PORT}`);
        })
    })
    .catch((error) => console.log(error));