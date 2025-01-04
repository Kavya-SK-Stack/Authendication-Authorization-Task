const express = require('express');
const mongoose = require('mongoose');
const { MONGO, PORT } = require('./utils/config');

const app = express();

app.get('/', (request, response) => {
    response.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
    console.log(`Server is running @http://localhost:3003`);
});

mongoose.connect( MONGO )

    .then(() => {
        console.log('Connected to MongoDB..');
    })
     
    .catch((error) => {
        console.log('Error connecting to MongoDb', error);
    })