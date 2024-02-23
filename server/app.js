const express = require('express');

const app = express();
const cors = require('cors');
const morgan = require('morgan');
const myGameRouter = require('./routes/myGameRouter');

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', myGameRouter);

module.exports = app;
