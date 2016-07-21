console.log('new controller')

app.controller('newController', ['$scope', 'friendsFactory', function($scope, friendsFactory) {
  /*
    THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
  */
  var index = function(){
    console.log('index run')
    // the param friends is pased in by the callback function in the friendsFactory
    friendsFactory.index(function(friends){
      $scope.friends = friends;
      console.log($scope.friends);
    });
  };

  index();

  $scope.create = function(){
    friendsFactory.create($scope.friend, index);
    // clean $scope.friend?
  }
}]);
