var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Zones = require('../models/zones');
var Verify = require('./verify');

var zoneRouter = express.Router();
zoneRouter.use(bodyParser.json());

module.exports = zoneRouter;