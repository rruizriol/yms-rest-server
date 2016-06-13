var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var JobTypeTodos = require('../models/jobTypeTodos');
var Verify = require('./verify');

var jobTypeTodoRouter = express.Router();
jobTypeTodoRouter.use(bodyParser.json());

module.exports = jobTypeTodoRouter;