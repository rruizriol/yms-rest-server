var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Sites  = require('../models/sites');
var Verify = require('./verify');

var siteRouter = express.Router();
siteRouter.use(bodyParser.json());

module.exports = siteRouter;