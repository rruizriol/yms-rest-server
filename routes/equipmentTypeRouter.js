var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var EquipmentTypes = require('../models/equipmentTypes');
var Verify = require('./verify');

var equipmentTypeRouter = express.Router();
equipmentTypeRouter.use(bodyParser.json());

module.exports = equipmentTypeRouter;