/*var app = angular.module('mainApp', ['ngRoute', 'firebase']);

app.controller('loginCtrl', function($scope, $firebaseAuth) {
    var auth = $firebaseAuth();
    console.log("pass: "+$scope.password +  "user: "+$scope.username);


    $scope.getPass = function()
    {    console.log("pass: "+$scope.password +  "user: "+$scope.username);

    };

  });
*/

var app = angular.module('mainApp', ['firebase']);



app.controller('authCtrl', function($scope, $log, $firebaseAuth) {
    var ref = new Firebase('https://hcms-811be.firebaseio.com');
    var auth = $firebaseAuth(ref);
    auth.$authWithPassword({
      email: 'admin@admin.com',
      password: 'adminadmin'
      }).then(function(authData) {
        $log.info("Login Successful:");
        $log.info(authData);
      }).catch(function(error) {
        $log.info("Login Failed:");
        $log.info(error);
      });
  });

