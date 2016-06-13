var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Todos = require('../models/todos');
var Verify = require('./verify');

var todoRouter = express.Router();
todoRouter.use(bodyParser.json());

module.exports = todoRouter;