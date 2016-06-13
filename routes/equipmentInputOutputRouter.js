var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var EquipmentInputOutput = require('../models/equipmentInputOutputs');
var Verify = require('./verify');

var equipmentInputOutputRouter = express.Router();
equipmentInputOutputRouter.use(bodyParser.json());

module.exports = equipmentInputOutputRouter;