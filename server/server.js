require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
//const User = require('./models/User');

mongoose.connect(process.env.MongoDBLink);

const PORT = 3001;

const app = express();

app.get('/message', (req, res) => {
    res.send("Waka");
});

app.listen(PORT, () => {
    console.log('Listening');
});


/*run()
async function run(){
    try {
        const user1 = await User.create({
            firstName: "Owen",
            lastName: "Lehmidi",
            userName: "zestyLuvr",
            email: "zestyLuvr@gmail.com",
            password: "zesty6968",
            dateOfBirth: "2003-09-21",
            gender: "male",
        })
    }
    catch(err) {
        console.log(err.message);
    }
}
*/