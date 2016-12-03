var User  = require('../models/user');
var passport = require('passport');


module.exports = function(router) {
  router.post('/signup',  function(req, res, next) {
    User.findOne({ 'email' :  req.body.email }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return res.json(err);

        // check to see if theres already a user with that email
        if (user) {
            return res.json({message: 'user alreay exist !'})
        } else {

          var newUser = new User();
          newUser.name = req.body.name;
          newUser.email   = req.body.email;
          newUser.Hash_password = newUser.generateHash(req.body.Hash_password);
          //newUser.Hash_password  = auth.hash(password);
          newUser.save(function(err) {
                  if (err)
                      throw err;
                  return res.json({message: 'sign up success!'});
              });
        }
    });
});

  //TODO: redirect user in case of log in failure/success
  router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(  user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      res.status(200).json({
        status: 'Login successful!'
      });
    });
  })(req, res, next);
});


// log out

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});

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
