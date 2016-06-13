var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var EquipmentJobTodoDatas = require('../models/equipmentJobTodoDatas');
var Verify = require('./verify');

var equipmentJobTodoDataRouter = express.Router();
equipmentJobTodoDataRouter.use(bodyParser.json());

module.exports = equipmentJobTodoDataRouter;