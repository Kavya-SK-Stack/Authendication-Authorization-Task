
const mongoose = require('mongoose');
const { MONGO, PORT } = require('./utils/config');
const app = require('./app');

// connect to database
mongoose.connect(MONGO)

  .then(() => {
    console.log("Connected to MongoDB..");

    // listen for requests and start the server
    app.listen(PORT, () => {
      console.log(`Server is running @http://localhost:3003`);
    });
  })
    
  .catch((error) => {
    console.log("Error connecting to MongoDb", error);
  })