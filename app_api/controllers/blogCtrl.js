var Mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var dbURL = 'mongodb://localhost:27017/blog';

module.exports.index = function(req,res){
  Mongo.connect(dbURL, function(err, db){
        if(err) console.error(err);
        var posts = db.collection('post');
        posts.find().toArray(function(err, docs){
            if(err) console.log(err);
            res.json(docs);
            db.close();
        });
  });
};

module.exports.show = function(req,res){
  var postID = req.params.id;
  Mongo.connect(dbURL, function(err, db){
        if(err) console.error(err);
        var posts = db.collection('post');
        posts.findOne({_id:ObjectId(postID)}, function(err, doc){
            if(err) console.log(err);
            res.json(doc);
            db.close();
        });
  });
};

module.exports.create = function(req,res){
  var post = req.body;
  post.date = new Date();
  Mongo.connect(dbURL, function(err, db){
      var posts = db.collection('post');
      posts.insert(post, function(err, result){
        if(err) console.log(err);
          res.json(result);
      });
  });
};

module.exports.update = function(req, res) {
    var postID = req.params.id;
    Mongo.connect(dbURL, function(err, db){
        if(err) console.log(err);
        var posts = db.collection('post');
        posts.updateOne({_id:ObjectId(postId)},
            {$set:{"body":req.body.body, "title":req.body.title,
                  "author":req.body.author}}, function(err, result){
            if(err) console.log(err);
            res.json(result);
        });
    });
};

module.exports.delete = function(req, res){
  var postID = req.params.id;
  Mongo.connect(dbURL, function(err, db){
    if(err) console.log(err);
    var posts = db.collection('post');
    posts.remove({_id:ObjectId(postID)}, function(err, result){
        if(err) console.log(err);
        res.json(result);
    });
  });
};