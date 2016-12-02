var User  = require('../models/user');
var passport = require('passport');


module.exports = function(router) {
  router.get('/users/login', function(req,res){
  User.find(function(err, obj){
    if(err){
      res.send(err);
    }
    else{
      res.json(obj);
    }
                      });
  });
  router.post('/signup', passport.authenticate('local-signup', {

    //TODO: redirect user in case of log in failure/success
      successRedirect : '/home', // redirect to the secure profile section
      failureRedirect : '/', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

  //TODO: redirect user in case of log in failure/success
  router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/home', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

  return router;
}
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

// if user is authenticated in the session, carry on
if (req.isAuthenticated()){

    return next();
}
// if they aren't redirect them to the home page
res.redirect('/');
}
