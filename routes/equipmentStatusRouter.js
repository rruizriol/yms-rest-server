var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var EquipmentStatus = require('../models/equipmentStatus');
var Verify = require('./verify');

var equipmentStatusRouter = express.Router();
equipmentStatusRouter.use(bodyParser.json());

module.exports = equipmentStatusRouter;