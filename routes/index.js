/*
 * GET home page.
 */

app = null;

exports.createRoutes = function(app_ref){
  app = app_ref;
  app.get('/', function(req, res){ res.send('hello'); });
};
