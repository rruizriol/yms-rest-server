var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var EquipmentMovements = require('../models/equipmentMovements');
var Verify = require('./verify');

var equipmentMovementRouter = express.Router();
equipmentMovementRouter.use(bodyParser.json());

module.exports = equipmentMovementRouter;