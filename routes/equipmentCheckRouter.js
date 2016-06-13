var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var EquipmentChecks = require('../models/equipmentChecks');
var Verify = require('./verify');

var equipmentCheckRouter = express.Router();
equipmentCheckRouter.use(bodyParser.json());

module.exports = equipmentCheckRouter;