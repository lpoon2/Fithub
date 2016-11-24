var work = require('../models/workout.js');

module.exports = function(router) {


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

router.post('/workout',function(req,res){
  var ele = new work();
  ele.name = req.body.name;
  ele.description = req.body.description;
  ele.original_user = req.body.original_user;
  ele.current_user = req.body.current_user;
  ele.rating = req.body.rating;
  ele.comments = req.body.comments;
  ele.keywords = req.body.keywords;
  ele.elements = req.body.elements;
  ele.save(function(err, obj){
    if(err){
      res.status(500);
      res.json(err);
    }
    else{
      res.status(201);
      res.json({ message: 'workout created!'  });
    }
  });
});
return router;
}
