var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var LocationStatus = require('../models/locationStatus');
var Verify = require('./verify');

var locationStatusRouter = express.Router();
locationStatusRouter.use(bodyParser.json());

module.exports = locationStatusRouter;