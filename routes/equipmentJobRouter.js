var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var EquipmentJobs = require('../models/equipmentJobs');
var Verify = require('./verify');

var equipmentJobRouter = express.Router();
equipmentJobRouter.use(bodyParser.json());

module.exports = equipmentJobRouter;