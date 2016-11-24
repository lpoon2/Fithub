var User  = require('../models/user');
var passport = require('passport');


module.exports = function(router) {
  router.get('/users', function(req,res){
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

      successRedirect : '/', // redirect to the secure profile section
      failureRedirect : '/', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

  //TODO: redirect user in case of log in failure/success
  router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

  return router;
}
