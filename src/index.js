const express = require('express');
const morgan = require('morgan');
const knexLogger = require('knex-logger');
const Knex = require('knex');
const bodyParser = require('body-parser');
const Model = require('objection').Model;

const knexConfig = require('../knexfile');

const monkeyPatchRouteMethods = require('./helpers');

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV;

// Initialize knex.
const knex = Knex(knexConfig[NODE_ENV]);

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex(knex);

const app = express();

monkeyPatchRouteMethods(app);

app.use(bodyParser.json());

// configure logging
app.use(morgan('dev'));
app.use(knexLogger(knex));

// register apis
require('./users/api')(app);

// error handling
app.use(function(err, req, res, next) {
  if (err) {
    res
      .status(err.statusCode || err.status || 500)
      .send(err.data || err.message || {});
  } else {
    next();
  }
});

app.get('/', function(req, res) {
  res.send('Healthy');
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}!`);
});

