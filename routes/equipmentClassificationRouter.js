var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var EquipmentClassifications = require('../models/equipmentClassifications');
var Verify = require('./verify');

var equipmentClassificationRouter = express.Router();
equipmentClassificationRouter.use(bodyParser.json());

module.exports = equipmentClassificationRouter;