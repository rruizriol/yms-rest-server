var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Companies = require('../models/companies');
var Verify = require('./verify');

var companyRouter = express.Router();
companyRouter.use(bodyParser.json());

module.exports = companyRouter;