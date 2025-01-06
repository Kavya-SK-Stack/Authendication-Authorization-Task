// import express
const express = require("express");
const logger = require('./utils/logger');
const errorRoute = require("./utils/errorRoute");
// const authRouter = require("./routes/authRoutes");
const authRouter = require('./routes/authRoutes');

// create an express app
const app = express();

// use the express json middleware
app.use(express.json());

// use the logger middleware
app.use(logger);

// app.use(morgan('dev'))
app.use('/auth', authRouter);

app.use(errorRoute);

// export the app
module.exports = app;