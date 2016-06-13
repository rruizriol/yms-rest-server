var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var TodoParameters = require('../models/todoParameters');
var Verify = require('./verify');

var todoParameterRouter = express.Router();
todoParameterRouter.use(bodyParser.json());

module.exports = todoParameterRouter;