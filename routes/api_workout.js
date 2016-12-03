var work = require('../models/workout.js');

module.exports = function(router) {

  function ErrMsg(error){
    var msg = "Error: ";
    if (!error.errors){
      msg += error.message;
    }else{
      //var space = true;
      for (var key in error.errors){
        msg += error.errors[key].message + ' ';
      }
    }
    return msg;
  }

router.get('/workout', function(req,res){
work.find(function(err, obj){
  if(err){
    res.send(err);
  }
  else{
    res.json(obj);
  }
                    });
});

router.get('/workout/:current_user', isLoggedIn, function(req,res){
work.find({current_user: req.user.name},function(err, obj){
  if(err){
    res.send(err);
  }
  else{
    res.json(obj);
  }
                    });
});


router.post('/workout',function(req,res){
  var ele = new work();
  ele.name = req.body.name;
  ele.description = req.body.description;
  ele.original_user = req.body.original_user;//!!!!!!!!!!!!!!!!!!!!!*original user need to be changed to null if created or previous user
  ele.current_user = req.body.current_user;//current user need to be changed in front end
  //ele.rating = req.body.rating;
  ele.comments = req.body.comments;
  ele.keywords = req.body.keywords;
  //ele.elements = req.body.elements;
  ele.days = req.body.days;//is this enough to make a deep copy ?

  ele.num_favorite = 0;
  ele.num_copy = 0;
  ele.original_workout_id = req.body.original_workout_id;//!!!!!!!!!!!!!!!!!!!!!*taken care in front end
  ele.private = req.body.private;

  ele.save(function(err){
    if(err){
      res.status(500);
      res.json({message: ErrMsg(error)});
    }
    else{
      res.status(201);
      res.json({ message: 'workout created!'  });
    }
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
