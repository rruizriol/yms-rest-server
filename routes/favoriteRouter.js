var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Favorites = require('../models/favorites.js');

var favoriteRouter = express.Router();
favoriteRouter.use(bodyParser.json());
var Verify = require('./verify.js');

favoriteRouter.route('/')
.all(Verify.verifyOrdinaryUser)
.get(function (req, res, next) {
    Favorites.find({})
        .populate('postedBy')
        .populate('dishes')
        .exec(function (err, favorite) {
        if (err) next(err);
        res.json(favorite);
    });
})

.post(function (req, res, next) {
    req.body.postedBy = req.decoded._doc._id;

    Favorites.findOne({postedBy: req.body.postedBy}, function(err, favorite) {
        if (err) {
             return next(err);
        }
        if (!favorite) {
             Favorites.create({postedBy: req.body.postedBy, dishes: [req.body._id]}, function(err, favorite) {
                 if (err) next(err);
                 favorite.save(function (err, favorite) {
                     if (err) next(err);
                     res.json(favorite);
                 });
             });
        } else {
            var exist = false;
            for (var i = (favorite.dishes.length -1); i >= 0; i--) {
                if (favorite.dishes[i] == req.body._id) {
                    exist = true;
                }
            }

            if (!exist) {
                favorite.dishes.push(req.body._id);
                favorite.save(function (err, favorite) {
                    if (err) next(err);
                    res.json(favorite);
                });
            } else {
                return res.status(200).json({status: 'Dish already added!'});
            }

        }
   });
})

.delete(function (req, res, next) {
    req.body.postedBy = req.decoded._doc._id;

    Favorites.findOne({postedBy: req.body.postedBy}, function (err, favorite) {
        if (err) {
            return next(err);
        }
        if (!favorite) {
            return res.status(404).json({status: 'No dish Added!'});
        } else {
            favorite.dishes.splice(0, favorite.dishes.length);
            favorite.save(function (err, favrotie) {
                if (err) next(err);
                res.json(favorite);
            });
        }
    });
});

favoriteRouter.route('/:dishId')
.delete(Verify.verifyOrdinaryUser, function (req, res, next) {
    req.body.postedBy = req.decoded._doc._id;

    Favorites.findOne({postedBy: req.body.postedBy}, function (err, favorite) {
        if (err) {
            return next(err);
        }
        if (!favorite) {
            return res.status(404).json({status: 'No dish added!'});
        } else {
            for (var i = (favorite.dishes.length -1); i >= 0; i--) {
                if (favorite.dishes[i] == req.params.dishId) {
                    favorite.dishes.splice(i, i + 1);
                }
            }

            favorite.save(function (err, favrotie) {
                if (err) next(err);
                res.json(favorite);
            });
        }
    });
});

module.exports = favoriteRouter;