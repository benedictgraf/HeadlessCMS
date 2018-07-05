app.controller("AuthCtrl", ["$scope", "$firebaseAuth", "$rootScope", '$state',
  function($scope, $firebaseAuth, $rootScope, $state) {
    $scope.login = function(){
    $scope.authObj = $firebaseAuth();
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    $scope.authObj.$signInWithEmailAndPassword(email, pass).then(function(firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
        $state.go("panel")
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      });
    }
    $scope.Logout = function(){
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log("Logout successful");

            //localStorage.clear(); This works but not recommended
            //localStorage.removeItem("firebase:host:project-xxxxxxxxxx.firebaseio.com"); This is currently am doing in my project

            $state.go("view");

          }, function(error) {
            // An error happened.
            console.log(error);

          });
   }
  }
]);

/*
app.controller("AuthCtrl", ["$scope", "$firebaseAuth",
  function($scope, $firebaseAuth) {
    var auth = $firebaseAuth();

    $scope.signIn = function() {
      $scope.firebaseUser = null;
      $scope.error = null;

      auth.$signInAnonymously().then(function(firebaseUser) {
        $scope.firebaseUser = firebaseUser;
      }).catch(function(error) {
        $scope.error = error;
      });
    };
  }
]);
*/

/*
app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);

app.controller('AuthCtrl', ['$scope', '$state', '$http', 'Auth',
  function($scope, $state, $http, Auth) {
    $scope.auth = Auth;



    $scope.login = function(email: string, password: string) {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        console.log("mail:" + email +  " " + "pass:" + password)
      Auth.$signInWithEmailAndPassword({
        email: '',
        password: ''
      })
      .then(function(authData) {
        console.log('Logged in as:', authData.uid);
        //$state.go('profile');
      })
      .catch(function(err) {
        console.log('error:',err);
        //$state.go('login');
      });
    };
  }
]);
/*

/*
// let's create a re-usable factory that generates the $firebaseAuth instance
app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);

// and use it in our controller
app.controller("AuthCtrl", ["$scope", "Auth",
  function($scope, Auth) {
    $scope.login = function() {
      $scope.message = null;
      $scope.error = null;

      // Create a new user
      Auth.$authWithPassword($scope.email, $scope.password)
        .then(function(firebaseUser) {
          $scope.message = "User created with uid: " + firebaseUser.uid;
        }).catch(function(error) {
          $scope.error = error;
        });
    };
}]);
*/
