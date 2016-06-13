var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Locations = require('../models/locations');
var Verify = require('./verify');

var locationRouter = express.Router();
locationRouter.use(bodyParser.json());

module.exports = locationRouter;