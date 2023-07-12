const express = require('express');

const cors = require('cors');

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).json({ message: 'Service Available' })
})

app.post('/sns', (req, res, next) => {
    const snsMessage = req.body;

    console.log('Received SNS message:', snsMessage);

    // Send response
    res.status(200).json({ result: snsMessage });
});

app.listen(5500, _ => {
    console.log('App Listen Port: ', 5500)
})

