const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/message', (req, res) => {
    console.log("owen is a ptard")
    res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
    console.log('Listening');
})