const express = require('express');

const PORT = 3001;

const app = express();

app.get('/message', (req, res) => {
    res.send("Waka");
});

app.listen(PORT, () => {
    console.log('Listening');
});