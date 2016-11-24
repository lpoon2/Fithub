module.exports = function (app, router) {

  app.use('/api', require('./api_element.js')(router));
  app.use('/api', require('./api_workout.js')(router));

};
