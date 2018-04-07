const express = require('express');
const path = require('path');
// Const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const swaggerize = require('swaggerize-express');
const cors = require('cors');

const app = express();
const watcher = require('./watcher');
//watcher(app);

// Uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/v1/entries', require('./routes/entries.js'));
// app.use(swaggerize({
//   api: path.join(__dirname, 'config/swagger.json'),
//   handlers: path.join(__dirname, 'routes')
// }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error routes

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    console.log('error: ' + err.message + '\n' + err);
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  console.log('error: ' + err.message);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
