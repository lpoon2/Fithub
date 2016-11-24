var Ele = require('../models/element.js');

module.exports = function(router) {


router.get('/elements', function(req,res){
Ele.find(function(err, obj){
  if(err){
    res.send(err);
  }
  else{
    res.json(obj);
  }
                    });
});

router.post('/elements',function(req,res){
  var ele = new Ele();
  ele.name = req.body.name;
  ele.description = req.body.description;
  ele.type = req.body.type;
  ele.media = req.body.media;
  ele.keywords = req.body.keywords;
  ele.save(function(err, obj){
    if(err){
      res.status(500);
      res.json(err);
    }
    else{
      res.status(201);
      res.json({ message: 'element created!'  });
    }
  });
});
return router;
}
