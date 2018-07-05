//auth.controller.js is responsible for login process to /admin panel and checks if the credentials fit the firebase-users credentials

app.controller("AuthCtrl", ["$scope", "$firebaseAuth", "$rootScope", '$state',
  function($scope, $firebaseAuth, $rootScope, $state) {
    $scope.login = function(){
    $scope.authObj = $firebaseAuth();
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    $scope.editmode = false;

    $scope.authObj.$signInWithEmailAndPassword(email, pass).then(function(firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
        $state.go("view")
        $scope.toggleEditMode = function(){
          $scope.editmode = $scope.editmode === false ? true: false;
        }
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
