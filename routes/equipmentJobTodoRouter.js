var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var EquipmentJobTodos = require('../models/equipmentJobTodos');
var Verify = require('./verify');

var equipmentJobTodoRouter = express.Router();
equipmentJobTodoRouter.use(bodyParser.json());

module.exports = equipmentJobTodoRouter;