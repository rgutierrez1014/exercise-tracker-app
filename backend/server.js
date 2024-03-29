const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app_config = require('./config');


if (app_config.app_env === 'development') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// ROUTES
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// ENTRYPOINT
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});