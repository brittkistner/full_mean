console.log('models')
var mongoose = require('mongoose');

//SCHEMA
var FriendSchema = new mongoose.Schema({
  name: String,
})


var Friend = mongoose.model('Friend', FriendSchema);

Friend.findOneAndUpdate(
  {name: "Fred"},
  {name: "Fred"},
  {upsert: true, new: true, setDefaultsOnInsert: true},
  function(err, friend){
    if(err){
      console.log(err)
    } else {
      console.log('friend created')
    }
  }
)
