console.log('friends factory');

app.factory('friendsFactory', ['$http', function($http){
  // constructor for our factory
  var friends = [];
  var friend = [];

  function FriendsFactory(){
    var _this = this;

    // CREATE
    this.create = function(newFriend, callback){
      $http.post('/friends', newFriend)
      .then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) === 'function'){
          callback(returned_data.data)
        }
      })
    };

    // UPDATE
    this.update = function(id, callback) {
      http.put('/friends/'+id).then(function(returned_data){
        console.log(returned_data.data)
        // this is a success or error response
        callback(returned_data.data)
      })
    };

    // DISPLAY ALL
    this.index = function(callback){
      // call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data
        callback(friends);
      })
      // Note: this can be shortened to $http.get('/friends').then(callback);
      // But only if you want to run the callback from the controller
    };

    // DELETE
    this.delete = function(id, callback){
      // COMPLETE
      $http.delete('/friends/'+id).then(function(returned_data){
        console.log(returned_data.data);
        //  you will get a success or error message here, what do you want your callback
        // function to do with this?
        callback(returned_data.data);
      })
    };

    // DISPLAY ONE
    this.show = function(id, callback){
      $http.get('/friends/'+id).then(function(returned_data){
        console.log(returned_data.data);
        friend = returned_data.data
        callback(friend);
      })
    };

    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };

    this.getFriend = function(callback){
      callback(friend);
    };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);
