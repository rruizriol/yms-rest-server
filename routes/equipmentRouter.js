var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Equipment = require('../models/equipments');
var Verify = require('./verify');

var equipmentRouter = express.Router();
equipmentRouter.use(bodyParser.json());

module.exports = equipmentRouter;