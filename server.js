const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const item = require('./routes/api/items');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB COnnected...'))
    .catch(err => console.log(err));

// Use routes
app.use('api/items', item);

// Use port from env variable (eg in heroku) or 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}...`));
