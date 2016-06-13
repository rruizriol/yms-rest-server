var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var LocationType = require('../models/locationTypes');
var Verify = require('./verify');

var locationTypeRouter = express.Router();
locationTypeRouter.use(bodyParser.json());

module.exports = locationTypeRouter;