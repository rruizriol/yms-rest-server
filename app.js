var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var authenticate = require('./authenticate');
var config = require('./config');

mongoose.connect(config.mongoUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");
});

var routes = require('./routes/index');
var users = require('./routes/users');
var companyRouter = require('./routes/companyRouter');
var siteRouter = require('./routes/siteRouter');
var zoneRouter = require('./routes/zoneRouter');
var locationRouter = require('./routes/locationRouter');
var locationTypeRouter = require('./routes/locationStatusType');
var locationStatusRouter = require('./routes/locationStatusRouter');
var equipmentTypeRouter = require('./routes/equipmentTypeRouter');
var equipmentClassificationRouter = require('./routes/equipmentClassificationRouter');
var equipmentStatusRouter = require('./routes/equipmentStatusRouter');
var jobTypeRouter = require('./routes/jobTypeRouter');
var todoRouter = require('./routes/todoRouter');
var todoParameterRouter = require('./routes/todoParameterRouter');
var jobTypeTodoRouter = require('./routes/jobTypeTodoRouter');
var equipmentRouter = require('./routes/equipmentRouter');
var equipmentInputOutputRouter = require('./routes/equipmentInputOutputRouter');
var equipmentJobRouter = require('./routes/equipmentJobRouter');
var equipmentJobTodoRouter = require('./routes/equipmentJobTodoRouter');
var equipmentJobTodoDataRouter = require('./routes/equipmentJobTodoDataRouter');
var equipmentCheckRouter = require('./routes/equipmentCheckRouter');
var equipmentMovementRouter = require('./routes/equipmentMovementRouter');

var app = express();

// Secure traffic only
app.all('*', function(req, res, next){
    console.log('req start: ',req.secure, req.hostname, req.url, app.get('port'));
  if (req.secure) {
    return next();
  };

 res.redirect('https://'+req.hostname+':'+app.get('secPort')+req.url);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// passport config
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/companies,companyRouter);
app.use('/sites,siteRouter);
app.use('/zones,zoneRouter);
app.use('/locations,locationRouter);
app.use('/locationTypes,locationTypeRouter);
app.use('/locationStatus,locationStatusRouter);
app.use('/equipmentTypes,equipmentType);
app.use('/equipmentClassifications,/equipmentClassification);
app.use('/equipmentStatus,equipmentStatus);
app.use('/jobTypes,jobType);
app.use('/todos,todoRouter);
app.use('/todoParameters,todoParameterRouter);
app.use('/jobTypeTodos,jobTypeTodoRouter);
app.use('/equipments,equipmentRouter);
app.use('/equipmentInputOutputs,equipmentInputOutputRouter);
app.use('/equipmentJobs,equipmentJobRouter);
app.use('/equipmentJobTodos,equipmentJobTodoRouter);
app.use('/equipmentJobTodoDatas,equipmentJobTodoDataRouter);
app.use('/equipmentChecks,equipmentCheckRouter);
app.use('/equipmentMovements,equipmentMovementRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

module.exports = app;