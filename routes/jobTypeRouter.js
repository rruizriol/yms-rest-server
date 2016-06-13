var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var JobTypes = require('../models/jobTypes');
var Verify = require('./verify');

var jobTypeRouter = express.Router();
jobTypeRouter.use(bodyParser.json());

module.exports = jobTypeRouter;