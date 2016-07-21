// This file is required in the routes.js

console.log('friends controller');

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
  index: function(req, res){
    Friend.find({}, function(err, friends){
      if(err){
        res.json(err)
      } else{
        res.json(friends);
      }
    })
  },
  create: function(req, res){
    Friend.findOneAndUpdate(
      {name: req.params.name},
      req.body,
      {upsert: true, new: true, setDefaultsOnInsert: true},
      function(err, friend){
        if(err){
          res.json(err);
        } else {
          res.json(friend);
        }
      }
    )
  },
  update: function(req, res){
    Friend.update(
      {_id: req.params.id},
      {
        name: req.body.name
      },
      function(err){
        if(err) {
          res.json(err);
        } else {
          res.json({success: req.body.name + " successfully updated"})
        }
      }
    )
    res.json({placeholder: 'update'});
  },
  delete: function(req, res){
    Friend.find({_id: req.params.id}, function(err, friend){
      if (err){
        res.json(err);
      } else{
        if (friend.length){
          Friend.remove({_id: req.params.id}, function(err, friend){
            if(err){
              res.json(err);
            } else {
              res.json({success: friend.name + " successfully removed"});
            }
          })
        }
      }
    })
    res.json({placeholder: 'delete'});
  },
  show: function(req, res){
    Friend.findOne(
      {_id:req.params.id},
      function(err,friend){
        if (err){
          res.json(err);
        } else{
          res.json(friend);
        }
      }
    );
  }
}
