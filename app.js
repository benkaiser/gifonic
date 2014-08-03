/**
 * Module dependencies.
 */

var express = require('express.io');
var path = require('path');

var app = express();
app.http().io();

// all environments
app.set('port', process.env.PORT || 2365);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set('root', __dirname);
app.engine('html', require('swig').renderFile);
app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({secret: 'maisecret'}));
app.use(app.router);
app.use('/static', express.static(__dirname + '/static'));

require(path.join(__dirname, 'routes')).createRoutes(app);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
